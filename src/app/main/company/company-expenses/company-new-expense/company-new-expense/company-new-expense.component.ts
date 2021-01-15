import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyExpense } from '../../models/company-expense';
import { CompanyExpenseService } from '../../company-expense.service';

@Component({
    templateUrl: 'company-new-expense.component.html',
})
export class CompanyNewExpenseComponent implements OnInit {
    formCompanyExpense: FormGroup;
    newCompanyExpense: CompanyExpense;

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
            .subscribe((data) => console.log(data));
    }
}
