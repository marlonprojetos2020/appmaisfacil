import { Component, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoDialogService,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { CompanyInvoiceService } from '../company-invoice.service';
import { PageDatatableComponent } from '../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    templateUrl: './company-invoice.component.html',
})
export class CompanyInvoiceComponent {
    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

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
            action: (item) => {
                this.poDialogService.confirm({
                    title: 'Cancelar Nota',
                    message: `Tem certeza que deseja cancelar a nota fiscal ?`,
                    confirm: () => {
                        this.companyInvoiceService.cancelInvoice(item.id).subscribe(() => {
                            this.dataTableComponent.ngOnInit();
                            this.poNotificationService.success('Nota Fiscal cancelada com seucesso');

                        });
                    },
                });
            },

            disabled: (item) =>
                item.statusText === 'CANCELADA' ||
                item.status === 'WAITING_CANCELEMENT' ||
                item.status === 'CANCELED',
        },
        {
            label: 'Baixar Nota Fiscal',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) => item.status !== 'OK',
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
            type: 'label',
            labels: [
                { value: 'PROCESSING', color: 'color-08', label: 'Processando' },
                { value: 'OK', color: 'color-12', label: 'OK' },
                { value: 'WAITING_CANCELEMENT', color: 'color-01', label: 'Esperando Cancelamento' },
                { value: 'CANCELED', color: 'color-06', label: 'Cancelada' },
            ],
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

    constructor(
        private companyInvoiceService: CompanyInvoiceService,
        private poNotificationService: PoNotificationService,
        private poDialogService: PoDialogService,
    ) {}
}
