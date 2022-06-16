import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { CompanyExpense } from '../../../models/company-expense';
import { CompanyExpenseService } from '../../../company-expense.service';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-company-expense-form',
    templateUrl: './company-expense-form.component.html',
})
export class CompanyExpenseFormComponent implements OnInit {

    @Input() editedExpense = null;
    @Input() breadcrumb = null;

    formCompanyExpense: FormGroup;
    urlUploadDocument: string;
    loading = false;
    isHideLoading = true;

    options = [];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    @ViewChild('stepper', { static: true }) stepper;


    constructor(
        private formBuilder: FormBuilder,
        private companyExpenseService: CompanyExpenseService,
        private poNotificationService: PoNotificationService,
        private router: Router,
    ) {}

    ngOnInit(): void {

        this.companyExpenseService.getTypeExpense().subscribe((options) => {
            this.options.push(
                ...options.map((item) => ({
                    label: item.label,
                    value: item.id,
                })),
            );
            this.formCompanyExpense = this.formBuilder.group({
                description: [this.editedExpense?.description, Validators.required],
                type: this.formBuilder.group({
                    id: [this.editedExpense?.type.id, Validators.required],
                }),
                value: [this.editedExpense?.value, Validators.required],
                date: [this.editedExpense?.date, Validators.required],
            });
        }
        );
    }

    submitForm(): any {
        this.loading = true;
        const newCompanyExpense = this.formCompanyExpense.getRawValue() as CompanyExpense;
        this.editedExpense ?
            this.companyExpenseService.editCompanyExpense(this.editedExpense.id, newCompanyExpense)
                .pipe(finalize(() => this.loading = false))
                .subscribe(() => this.setUrlDocument(this.editedExpense.id))
            :
            this.companyExpenseService
                .createCompanyExpense(newCompanyExpense)
                .pipe(finalize(() => this.loading = false))
                .subscribe(data => this.setUrlDocument(data.id));
    }

    nextForm(): void {
        this.stepper.next();
    }

    setUrlDocument(idExpense: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/expense/${idExpense}/proof-of-payment`;
        this.nextForm();
    }

    onLoad(): void {
        this.isHideLoading = false;
    }

    success(): void {
        this.isHideLoading = true;
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.router.navigate(['empresa', 'despesas']);
    }

    dirtyMe(input): void {
        this.formCompanyExpense.get(input).markAsDirty();
    }
}
