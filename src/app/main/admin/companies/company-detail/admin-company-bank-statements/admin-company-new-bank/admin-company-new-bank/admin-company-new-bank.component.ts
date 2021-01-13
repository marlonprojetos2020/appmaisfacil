import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoNotificationService } from '@po-ui/ng-components';
import { AdminCompanyBankService } from '../../admin-company-bank-statement.service';
import { BankAccount } from '../../model/BankAccount';

@Component({
    templateUrl: './admin-company-new-bank.component.html',
})
export class AdminCompanyNewBankComponent implements OnInit {
    options = [];
    id: string = '';
    formNewBankAccount: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private adminCompanyBankService: AdminCompanyBankService,
        private location: Location,
        private notificationService: PoNotificationService
    ) {}

    ngOnInit(): void {
        this.formNewBankAccount = this.formBuilder.group({
            bankId: ['', Validators.required],
            accountType: ['', Validators.required],
            agency: ['', Validators.required],
            accountNumber: ['', Validators.required],
        });

        this.id = this.activatedRoute.snapshot.params.id;

        this.adminCompanyBankService.selectBank().subscribe((options) => {
            this.options.push(
                ...options.map((item) => ({
                    label: item.name,
                    value: item.id,
                }))
            );
        });
    }

    SubmitBank(): void {
        const account = this.formNewBankAccount.getRawValue() as BankAccount;
        this.adminCompanyBankService
            .newAccount(this.id, account)
            .subscribe(() => {
                this.notificationService.success(
                    `Banco Cadastrado com sucesso!`
                );
                this.location.back();
            });
    }

    dirtyMe(input): void {
        this.formNewBankAccount.get(input).markAsDirty();
    }
}
