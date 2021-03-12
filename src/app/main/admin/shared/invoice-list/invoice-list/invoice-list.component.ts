import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoTableAction, PoUploadFileRestrictions } from '@po-ui/ng-components';

import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';
import { environment } from 'src/environments/environment';
import { InvoiceListService } from '../invoice-list.service';

@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss'],
})

export class InvoiceListComponent implements OnInit {

    @Input() serviceApi: string;
    @Input() showCompanyField: boolean;
    @Input() breadcrumb: PoBreadcrumb;

    companyName: string;
    clientName: string;
    clientDocument: string;
    status: string;
    companyDocument: string;
    totalAmount: string;
    emissionAt: string;
    imageInvoice: string;
    pdf: string;

    columns: DatatableColumn[] = [];
    pageActions: PoPageAction[] = [];

    @ViewChild('modalEnviarNota', { static: true })
    poModalEnviarNota: PoModalComponent;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @ViewChild('modalCancelarNota', { static: true })
    poModalCancelarNota: PoModalComponent;

    uploadDocumentUrl: string = '';

    ehPdf = false;

    idInvoice: number;

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
        private adminInvoiceService: InvoiceListService,
        private poNotificationService: PoNotificationService,
    ) {}

    ngOnInit(): void {

        this.columns = [
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
                label: 'Empresa',
                property: 'companyName',
                visible: this.showCompanyField,
            },
            {
                label: 'Cliente',
                property: 'client.name',
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
    }

    setUrlDocument(id: number): void {
        this.uploadDocumentUrl = `${environment.apiUrl}/nota-fiscal/${id}/file`;
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.dataTableComponent.ngOnInit();
        this.poModalEnviarNota.close();
    }

    downloadPdf(): any {
        window.open(this.pdf, '_blank');
    }
}
