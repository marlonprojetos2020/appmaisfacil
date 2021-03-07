import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoBreadcrumb, PoNotificationService } from '@po-ui/ng-components';

import { AdminBankAccountFormService } from '../admin-bank-account-form.service';
import { User } from '../../../../../model/user';
import { CompaniesService } from '../../../../../companies.service';
import { BankAccount } from '../model/BankAccount';

@Component({
    templateUrl: './admin-bank-account-form.component.html',
    selector: 'app-bank-account-form',
})
export class AdminBankAccountFormComponent implements OnInit {

    @Input() editedAccount: BankAccount = null;

    options = [];
    id: string = '';
    loading: boolean;
    formNewBankAccount: FormGroup;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private adminCompanyBankService: AdminBankAccountFormService,
        private location: Location,
        private notificationService: PoNotificationService,
        private companiesService: CompaniesService,
    ) {}

    ngOnInit(): void {
        this.formNewBankAccount = this.formBuilder.group({
            bankId: [this.editedAccount?.bankId, Validators.required],
            accountType: [this.editedAccount?.accountType, Validators.required],
            agency: [this.editedAccount?.agency, Validators.required],
            accountNumber: [this.editedAccount?.accountNumber, Validators.required],
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

        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    SubmitBank(): void {
        this.loading = true;
        const account = this.formNewBankAccount.getRawValue() as BankAccount;
        if (this.editedAccount) {
            this.adminCompanyBankService.editAccount(this.id, account).subscribe()
        } else {
            this.adminCompanyBankService
                .newAccount(this.id, account)
                .subscribe((data) => {
                    this.notificationService.success(
                        `Banco Cadastrado com sucesso!`
                    );
                });
        }
        this.location.back();
    }

    dirtyMe(input): void {
        this.formNewBankAccount.get(input).markAsDirty();
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.userCompany?.fantasyName
                    ? user.userCompany?.fantasyName
                    : user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Contas Bancárias', link: `/admin/empresa/${user.id}/contas-bancarias` },
            { label: 'Nova Conta' }
        );
    }
}