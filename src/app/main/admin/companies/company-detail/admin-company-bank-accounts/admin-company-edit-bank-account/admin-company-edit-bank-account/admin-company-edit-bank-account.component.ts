import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';

import { CompaniesService } from '../../../../companies.service';
import { AdminCompanyEditBankAccountService } from '../admin-company-edit-bank-account.service';
import { User } from '../../../../model/user';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './admin-company-edit-bank-account.component.html',
})
export class AdminCompanyEditBankAccountComponent implements OnInit {

    id: string = '';
    breadcrumb: PoBreadcrumb = {
        items: [],
    };
    bank$: Observable<any>;


    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService,
        private editBankService: AdminCompanyEditBankAccountService,
    ) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        const bankAccountId = this.activatedRoute.snapshot.params.bankAccountId;
        this.bank$ = this.editBankService.findBank(this.id, bankAccountId);
        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
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
            { label: 'Editar Conta' },
        );
    }
}
