import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyExpense } from '../../models/company-expense';
import { CompanyExpenseService } from '../../company-expense.service';
import { environment } from '../../../../../../environments/environment';
import {
    PoNotificationService,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'company-new-expense.component.html',
})
export class CompanyNewExpenseComponent implements OnInit {
    formCompanyExpense: FormGroup;
    newCompanyExpense: CompanyExpense;
    urlUploadDocument: string;
    restrictions: PoUploadFileRestrictions;
    startDate: any = '';

    @ViewChild('stepper', { static: true }) stepper;

    options = [];

    constructor(
        private formBuilder: FormBuilder,
        private companyExpenseService: CompanyExpenseService,
        private poNotificationService: PoNotificationService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
            maxFileSize: 5242880,
            maxFiles: 1,
        };

        this.formCompanyExpense = this.formBuilder.group({
            description: ['', Validators.required],
            type: this.formBuilder.group({
                id: ['', Validators.required],
            }),
            value: ['', Validators.required],
            date: ['', Validators.required],
        });

        this.companyExpenseService.getTypeExpense().subscribe((options) =>
            this.options.push(
                ...options.map((item) => ({
                    label: item.label,
                    value: item.id,
                }))
            )
        );

        this.startDate = new Date();
    }

    submitForm(): any {
        this.newCompanyExpense = this.formCompanyExpense.getRawValue() as CompanyExpense;

        this.companyExpenseService
            .createCompanyExpense(this.newCompanyExpense)
            .subscribe((data) => {
                this.setUrlDocument(data.id);
            });
    }

    nextForm(): void {
        this.stepper.next();
    }

    setUrlDocument(idExpense: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/expense/${idExpense}/proof-of-payment`;
        this.nextForm();
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.location.back();
    }
}
