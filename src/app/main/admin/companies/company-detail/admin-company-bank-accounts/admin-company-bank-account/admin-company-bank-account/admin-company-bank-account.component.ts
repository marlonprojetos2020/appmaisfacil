import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../../shared/components/page-datatable/datatable-column';
import { User } from '../../../../model/user';
import { CompaniesService } from '../../../../companies.service';
import { adminCompanyBankAccountService } from '../admin-company-bank-account.service'

@Component({
    templateUrl: './admin-company-bank-account.component.html',
})
export class AdminCompanyBankAccountComponent implements OnInit {
    pageActions: PoPageAction[] = [];
    serviceApi = '';
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'enabled',
            color: (item) => item.enabled ? 'color-12' : 'color-07',
            type: 'boolean', boolean: {
                trueLabel: 'Ativa',
                falseLabel: 'Inativa'
            },
            icons: [
                {
                    value: 'true',
                    icon: 'po-icon-ok'
                },
                {
                    value: 'false',
                    icon: 'po-icon-close'
                }
            ],
            // label
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
                { value: 'CORRENTE', color: 'color-08', label: 'Corrente' }
            ]
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
        private bankService: adminCompanyBankAccountService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');

        this.serviceApi = `${environment.apiUrl}/users/${id}/bank-accounts/p/search`;

        this.pageActions = [{
            label: 'Nova Conta',
            icon: 'po-icon-plus-circle',
            url: `/admin/empresa/${id}/contas-bancarias/nova-conta`,
        }];

        this.tableActions = [{
            label: 'Editar Conta',
            action: (item) => {
                this.router.navigate(['editar-conta', item.id], { relativeTo: this.activatedRoute });
            },
            disabled: (item) => item.enabled === false,
        },
        {
            label: 'Desativar Conta',
            action: (item) => {
                this.bankService.toggleAccount(id, item.id).subscribe(data => {
                    item.enabled = false;
                });
            },
            disabled: (item) => !item.enabled
        },
        {
            label: 'Ativar Conta',
            action: (item) => {
                this.bankService.toggleAccount(id, item.id).subscribe(data => {
                    item.enabled = true;
                });
            },
            disabled: (item) => item.enabled
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
