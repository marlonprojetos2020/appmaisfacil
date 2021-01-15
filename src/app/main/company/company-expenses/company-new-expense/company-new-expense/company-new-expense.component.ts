import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyExpense } from '../../models/company-expense';
import { CompanyExpenseService } from '../../company-expense.service';
import { environment } from '../../../../../../environments/environment';

@Component({
    templateUrl: 'company-new-expense.component.html',
})
export class CompanyNewExpenseComponent implements OnInit {
    formCompanyExpense: FormGroup;
    newCompanyExpense: CompanyExpense;
    urlUploadDocument: string;

    @ViewChild('stepper', { static: true }) stepper;

    options = [
        {
            label: 'Tipo Exemplo',
            value: 1,
        },
    ];

    constructor(
        private formBuilder: FormBuilder,
        private companyExpenseService: CompanyExpenseService
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
    }

    submitForm(): any {
        this.newCompanyExpense = this.formCompanyExpense.getRawValue() as CompanyExpense;

        console.log(this.newCompanyExpense);
        this.companyExpenseService
            .createCompanyExpense(this.newCompanyExpense)
            .subscribe((data) => {
                console.log(data);
            });
    }

    nextForm(): void {
        this.stepper.next();
    }

    setUrlDocument(idExpense: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/expense/${idExpense}/proof-of-payment`;
        this.nextForm();
    }
}
