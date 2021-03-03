import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { User } from '../../../model/user';
import { CompaniesService } from '../../../companies.service';

@Component({
    templateUrl: './admin-company-bank-account.component.html',
})
export class AdminCompanyBankAccountComponent implements OnInit {
    pageActions: PoPageAction[] = [];
    serviceApi = '';
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Banco',
            property: 'bankName',
        },
        {
            label: 'Conta',
            property: 'accountNumber',
        },
        {
            label: 'Agência',
            property: 'agency',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService,
    ) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.serviceApi = `${environment.apiUrl}/users/${id}/bank-accounts/p/search`;
        this.pageActions = [{
            label: 'Nova Conta',
            icon: 'po-icon-plus-circle',
            url: `/admin/empresa/${id}/contas-bancarias/nova-conta`,
        }];
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
            { label: 'Contas Bancárias' }
        );
    }
}
