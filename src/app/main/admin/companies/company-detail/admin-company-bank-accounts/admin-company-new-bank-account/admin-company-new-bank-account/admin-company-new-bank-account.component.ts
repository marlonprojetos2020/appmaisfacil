import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';

import { AdminCompanyBankService } from '../../admin-company-bank.service';
import { User } from '../../../../model/user';
import { CompaniesService } from '../../../../companies.service';

@Component({
    templateUrl: './admin-company-new-bank-account.component.html',
})
export class AdminCompanyNewBankAccountComponent implements OnInit {
    id: string = '';
    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService,
    ) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
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
            { label: 'Nova Conta' }
        );
    }
}
