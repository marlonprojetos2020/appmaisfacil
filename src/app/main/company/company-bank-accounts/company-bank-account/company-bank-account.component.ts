import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';

import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { CompanyBankAccountService } from '../company-bank-account.service';

@Component({
    templateUrl: './company-bank-account.component.html',
})
export class CompanyBankAccountComponent {

    serviceApi = `${environment.apiUrl}/company/bank-account`;

    tableActions: PoTableAction[] = [{
        label: 'Editar Conta',
        action: (item) => {
            this.router.navigate(['editar-conta', item.id], { relativeTo: this.activatedRoute });
        },
        disabled: (item) => item.enabled === false,
    },
    {
        label: 'Desativar Conta',
        action: (item) => {
            this.companyBankService.toggleAccount(item.id).subscribe(() => {
                item.enabled = false
                this.poNotificationService.success('Conta desativada com sucesso');
            });
        },
        disabled: (item) => !item.enabled,
    },
    {
        label: 'Ativar Conta',
        action: (item) => {
            this.companyBankService.toggleAccount(item.id).subscribe(() => {
                this.poNotificationService.success('Conta ativada com sucesso');
                item.enabled = true
            });
        },
        disabled: (item) => item.enabled,
    }];

    pageActions: PoPageAction[] = [{
        label: 'Nova Conta',
        icon: 'po-icon-plus-circle',
        url: `/empresa/contas-bancarias/nova-conta`,
    }];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Inicio', link: '/empresa' },
            { label: 'Contas Bancárias', link: `` },
        ],
    };

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

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private companyBankService: CompanyBankAccountService,
        private poNotificationService: PoNotificationService
    ) {

    }
}
