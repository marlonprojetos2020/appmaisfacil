import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { AdminInvoiceService } from '../../admin-invoice.service';
import { Location } from '@angular/common';

@Component({
    templateUrl: './admin-invoices-list.component.html',
    styleUrls: ['admin-invoice-list.component.scss'],
})
export class AdminInvoiceListComponent implements OnInit {
    @ViewChild('modalNotaFiscal', { static: true })
    poModalNotaFiscal: PoModalComponent;

    uploadDocumentUrl: string = '';

    @Input() companyName: string;
    @Input() clientName: string;
    @Input() clientDocument: string;
    @Input() status: string;
    @Input() companyDocument: string;
    @Input() totalAmount: string;

    pageActions: PoPageAction[] = [];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Nota Fiscal', link: '/admin/nota-fiscal' },
        ],
    };

    serviceApi = `${environment.apiUrl}/nota-fiscal/p/search`;

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Enviar Nota',
            action: (item) => {
                this.poModalNotaFiscal.open();
                this.companyName = item.companyName;
                this.clientName = item['client.name'];
                this.clientDocument = item['client.document'];
                this.status = item.status;
                this.adminInvoiceService
                    .getCompany(item.companyId)
                    .subscribe((data) => {
                        this.companyDocument = data.userCompany.cnpj;
                    });
                this.setUrlDocument(item.id);
                if (this.modalTableItems.length === 0) {
                    this.adminInvoiceService
                        .getInvoice(item.id)
                        .subscribe((data) => {
                            data.items.map((nota) =>
                                this.modalTableItems.push(nota)
                            );
                            this.totalAmount = data.totalAmount;
                        });
                } else {
                    return;
                }
            },
            disabled: (item) => item.status === 'CANCELED',
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'status',
        },
        {
            label: 'Empresa',
            property: 'companyName',
        },
        {
            label: 'Valor',
            property: 'totalAmount',
        },
        {
            label: 'Emissão',
            property: 'emissionAt',
        },
    ];

    // Tabela Modal

    modalTableColumns: DatatableColumn[] = [
        {
            label: 'Descrição',
            property: 'title',
        },
        {
            label: 'Quantidade',
            property: 'quantity',
        },
        {
            label: 'Valor Unitário',
            property: 'amount',
        },
    ];

    modalTableItems: Array<any> = [];

    modalTableActions: PoTableAction[] = [];

    primaryAction: PoModalAction = {
        label: 'Cancelar',
        action: () => this.poModalNotaFiscal.close(),
    };

    constructor(
        private adminInvoiceService: AdminInvoiceService,
        private poNotificationService: PoNotificationService
    ) {}

    ngOnInit(): void {}

    setUrlDocument(id: number): void {
        this.uploadDocumentUrl = `${environment.apiUrl}/nota-fiscal/${id}/file`;
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.poModalNotaFiscal.close();
    }
}
