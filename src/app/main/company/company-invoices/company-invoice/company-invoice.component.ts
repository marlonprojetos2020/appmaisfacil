import { Component } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { CompanyInvoiceService } from '../company-invoice.service';

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

    tableActions: PoTableAction[] = [
        {
            label: 'Cancelar Nota',
            action: (item) =>
                this.companyInvoiceService
                    .cancelInvoice(item.id)
                    .subscribe((data) => {
                        item.statusText = data.statusText;
                    }),
            disabled: (item) =>
                item.statusText === 'CANCELADA' ||
                item.status === 'WAITING_CANCELEMENT' ||
                item.status === 'CANCELED',
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Cliente',
            property: 'client.name',
        },
        {
            label: 'Emissão',
            property: 'emissionAt',
            type: 'date',
            format: 'dd/MM/yyyy',
        },
        {
            label: 'Valor',
            property: 'totalAmount',
            type: 'currency',
            format: 'BRL',
        },
    ];

    constructor(private companyInvoiceService: CompanyInvoiceService) {}
}
