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
            label: 'Cancelar',
            action: (item) =>
                this.companyInvoiceService
                    .cancelInvoice(item.id)
                    .subscribe((data) => (item.status = data.statusText)),
            disabled: (item) =>
                item.status === 'CANCELED' ||
                item.status === 'WAITING_CANCELEMENT',
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
        },
        {
            label: 'Valor',
            property: 'totalAmount',
        },
    ];

    constructor(private companyInvoiceService: CompanyInvoiceService) {}
}
