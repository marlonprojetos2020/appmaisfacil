import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoBreadcrumb, PoNotificationService } from '@po-ui/ng-components';
import { AdminCompanyBankService } from '../../admin-company-bank-statement.service';
import { BankAccount } from '../../model/BankAccount';
import { User } from '../../../../model/user';
import { CompaniesService } from '../../../../companies.service';

@Component({
    templateUrl: './admin-company-new-bank.component.html',
})
export class AdminCompanyNewBankComponent implements OnInit {
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
        private adminCompanyBankService: AdminCompanyBankService,
        private location: Location,
        private notificationService: PoNotificationService,
        private companiesService: CompaniesService
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

        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    SubmitBank(): void {
        this.loading = true;
        const account = this.formNewBankAccount.getRawValue() as BankAccount;
        this.adminCompanyBankService
            .newAccount(this.id, account)
            .subscribe((data) => {
                this.notificationService.success(
                    `Banco Cadastrado com sucesso!`
                );
                this.location.back();
            });
    }

    dirtyMe(input): void {
        this.formNewBankAccount.get(input).markAsDirty();
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Extratos', link: `/admin/empresa/${user.id}/extratos` },
            { label: 'Nova Conta' }
        );
    }
}
