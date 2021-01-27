import { Component } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './company-invoice.component.html',
})
export class CompanyInvoiceComponent {
    pageActions: PoPageAction[] = [
        {
            label: 'Emitir Nota',
            icon: 'po-icon-plus-circle',
            url: '/empresa/nota-fiscal/emitir-nota',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
        ],
    };

    serviceApi = `${environment.apiUrl}/company/nota-fiscal/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'status',
        },
        {
            label: 'Cliente',
            property: 'client.name',
        },
        {
            label: 'Emissão',
            property: 'emissionAt',
        },
        {
            label: 'Valor',
            property: 'totalAmount',
        },
    ];

    constructor() {}
}
