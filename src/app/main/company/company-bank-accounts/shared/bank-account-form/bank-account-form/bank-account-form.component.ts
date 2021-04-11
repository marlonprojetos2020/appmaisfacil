import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

import { BankAccountFormService } from '../bank-account-form.service';
import { BankAccount } from '../model/BankAccount';
import { Router } from '@angular/router';

@Component({
    templateUrl: './bank-account-form.component.html',
    selector: 'app-bank-account-form',
})
export class BankAccountFormComponent implements OnInit {

    @Input() editedAccount: BankAccount = null;

    options: PoSelectOption[] = [];
    loading: boolean;
    formNewBankAccount: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private CompanyBankService: BankAccountFormService,
        private router: Router,
        private notificationService: PoNotificationService,
    ) {}

    ngOnInit(): void {
        this.formNewBankAccount = this.formBuilder.group({
            bankId: ['', Validators.required],
            accountType: [this.editedAccount?.accountType, Validators.required],
            agency: [this.editedAccount?.agency, Validators.required],
            accountNumber: [this.editedAccount?.accountNumber, Validators.required],
        });

        this.CompanyBankService.selectBank().subscribe((options) => {
            this.options.push(
                ...options.map((item) => ({
                    label: item.name,
                    value: item.id,
                }))
            );
            this.formNewBankAccount.get('bankId').setValue(this.editedAccount?.bankId);
        });
    }

    SubmitBank(): void {
        this.loading = true;
        const account = this.formNewBankAccount.getRawValue() as BankAccount;
        if (this.editedAccount) {
            this.CompanyBankService.editAccount(this.editedAccount.bankId, account)
                .subscribe(() => this.router.navigate(['empresa', 'contas-bancarias']));
        } else {
            this.CompanyBankService
                .newAccount(account)
                .subscribe(() => this.router.navigate(['empresa', 'contas-bancarias']));
        }
    }

    dirtyMe(input): void {
        this.formNewBankAccount.get(input).markAsDirty();
    }
}
