import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    PoBreadcrumb,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../../shared/components/page-datatable/datatable-column';
import { User } from '../../../../model/user';
import { CompaniesService } from '../../../../companies.service';

@Component({
    templateUrl: './admin-company-bank-account.component.html',
})
export class AdminCompanyBankAccountComponent implements OnInit {

    id = this.activatedRoute.snapshot.paramMap.get('id');
    serviceApi = `${environment.apiUrl}/users/${this.id}/bank-accounts/p/search`;

    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'enabled',
            color: (item) => item.enabled ? 'color-12' : 'color-07',
            type: 'boolean', boolean: {
                trueLabel: 'Ativa',
                falseLabel: 'Inativa',
            },
            icons: [
                {
                    value: 'true',
                    icon: 'po-icon-ok',
                },
                {
                    value: 'false',
                    icon: 'po-icon-close',
                },
            ],
        },
        {
            label: 'Banco',
            property: 'bankName',
        },
        {
            label: 'Tipo',
            property: 'accountType',
            type: 'label',
            labels: [
                { value: 'POUPANÇA', color: 'color-11', label: 'Poupança' },
                { value: 'CORRENTE', color: 'color-08', label: 'Corrente' },
            ],
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

    tableActions: PoTableAction[] = [];

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService,
    ) {}

    ngOnInit(): void {
        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe(data => this.setBreadcrumb(data));
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
            { label: 'Contas Bancárias' },
        );
    }
}
