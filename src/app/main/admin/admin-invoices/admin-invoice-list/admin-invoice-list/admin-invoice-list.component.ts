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

@Component({
    templateUrl: './admin-invoices-list.component.html',
    styleUrls: ['admin-invoice-list.component.scss'],
})
export class AdminInvoiceListComponent implements OnInit {
    @ViewChild('modalEnviarNota', { static: true })
    poModalEnviarNota: PoModalComponent;

    @ViewChild('modalCancelarNota', { static: true })
    poModalCancelarNota: PoModalComponent;

    uploadDocumentUrl: string = '';

    @Input() companyName: string;
    @Input() clientName: string;
    @Input() clientDocument: string;
    @Input() status: string;
    @Input() companyDocument: string;
    @Input() totalAmount: string;
    @Input() emissionAt: string;
    @Input() imageInvoice: string;
    @Input() pdf: string;

    ehPdf = false;

    idInvoice: number;

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
            label: 'Anexar Nota Fiscal',
            action: (item) => {
                this.poModalEnviarNota.open();
                item.companyFantasyName
                    ? (this.companyName = item.companyFantasyName)
                    : (this.companyName = item.companyName);
                this.clientName = item['client.name'];
                this.clientDocument = item['client.document'];
                this.status = item.statusText;
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
            disabled: (item) => item.status !== 'PROCESSING',
        },
        {
            label: 'Confirmar Cancelamento',
            action: (item) => {
                this.idInvoice = item.id;
                this.poModalCancelarNota.open();
                item.companyFantasyName
                    ? (this.companyName = item.companyFantasyName)
                    : (this.companyName = item.companyName);
                this.clientName = item['client.name'];
                this.clientDocument = item['client.document'];
                this.status = item.statusText;
                this.totalAmount = item.totalAmount;
                this.adminInvoiceService
                    .getCompany(item.companyId)
                    .subscribe((data) => {
                        this.companyDocument = data.userCompany.cnpj;
                    });
                this.imageInvoice = item.attachmentUrl;
                this.emissionAt = item.emissionAt;
                if (this.imageInvoice.indexOf('pdf') < 0) {
                    this.ehPdf = false;
                } else {
                    this.ehPdf = true;
                    this.pdf = item.attachmentUrl;
                }
            },
            disabled: (item) => item.status !== 'WAITING_CANCELEMENT',
        },
        {
            label: 'Baixar Nota',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) => !item.attachmentUrl,
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Empresa',
            property: 'companyName',
        },
        {
            label: 'Valor',
            property: 'totalAmount',
            type: 'currency',
            format: 'BRL',
        },
        {
            label: 'Emissão',
            property: 'emissionAt',
            type: 'date',
            format: 'dd/MM/yyyy',
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
            type: 'currency',
            format: 'BRL',
        },
    ];

    modalTableItems: Array<any> = [];

    modalTableActions: PoTableAction[] = [];

    primaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalEnviarNota.close(),
    };

    // Acoes Modal CancelInvoice
    cancelInvoice: PoModalAction = {
        label: 'Cancelar Nota',
        action: () => {
            this.adminInvoiceService
                .cancelInvoiceAdmin(this.idInvoice)
                .subscribe();
            this.poModalCancelarNota.close();
        },
    };

    closeModalCancelInvoice: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCancelarNota.close(),
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
        this.poModalEnviarNota.close();
    }

    downloadPdf(): any {
        window.open(this.pdf, '_blank');
    }
}
