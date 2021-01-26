import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyBankStatementService } from '../../company-bank-statement.service';

@Component({
    templateUrl: 'company-new-bank-statement.component.html',
})
export class CompanyNewBankStatementComponent implements OnInit {
    formNewStatement: FormGroup;

    options = [];

    constructor(
        private formBuilder: FormBuilder,
        private companyBankStatementService: CompanyBankStatementService
    ) {}

    ngOnInit(): void {
        this.formNewStatement = this.formBuilder.group({
            bankName: ['', Validators.required],
        });

        this.companyBankStatementService.getBankName().subscribe((options) =>
            this.options.push(
                ...options.items.map((item) => ({
                    label:
                        'Banco' +
                        item.bankAccount.bankName +
                        ' - ' +
                        'Agencia' +
                        item.bankAccount.agency +
                        ' - ' +
                        'Conta' +
                        item.bankAccount.accountNumber,
                    value: item.id,
                }))
            )
        );
    }
}
