import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';

import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './company-bank-account.component.html',
})
export class CompanyBankAccountComponent {

    serviceApi = `${environment.apiUrl}/company/bank-account`;
    pageActions: PoPageAction[] = [];
    tableActions: PoTableAction[] = [];

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

    constructor() {}

}
