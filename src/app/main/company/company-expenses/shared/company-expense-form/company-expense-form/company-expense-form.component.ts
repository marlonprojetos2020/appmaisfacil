import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { CompanyExpense } from '../../../models/company-expense';
import { CompanyExpenseService } from '../../../company-expense.service';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-company-expense-form',
    templateUrl: './company-expense-form.component.html',
})
export class CompanyExpenseFormComponent implements OnInit {
    formCompanyExpense: FormGroup;
    newCompanyExpense: CompanyExpense;
    urlUploadDocument: string;
    loading = false;

    options = [];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Minhas Despesas', link: '/empresa/despesas' },
            { label: 'Nova Despesa', link: '/empresa/despesas/nova-despesa' },
        ],
    };

    @ViewChild('stepper', { static: true }) stepper;


    constructor(
        private formBuilder: FormBuilder,
        private companyExpenseService: CompanyExpenseService,
        private poNotificationService: PoNotificationService,
        private location: Location,
    ) {}

    ngOnInit(): void {

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
    }

    submitForm(): any {
        this.loading = true;

        this.newCompanyExpense = this.formCompanyExpense.getRawValue() as CompanyExpense;

        this.companyExpenseService
            .createCompanyExpense(this.newCompanyExpense)
            .pipe(finalize(() => (this.loading = false)))
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

    dirtyMe(input): void {
        this.formCompanyExpense.get(input).markAsDirty();
    }
}
