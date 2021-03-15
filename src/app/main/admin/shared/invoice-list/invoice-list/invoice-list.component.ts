import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoDialogService,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';

import { Invoice } from '../invoice';
import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';
import { environment } from 'src/environments/environment';
import { InvoiceListService } from '../invoice-list.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss'],
})

export class InvoiceListComponent implements OnInit {

    @Input() serviceApi: string;
    @Input() showCompanyField: boolean;
    @Input() breadcrumb: PoBreadcrumb;

    companyDocument$: Observable<any>;
    invoiceProductList$: Observable<any>;

    modalInvoice: Invoice = null;
    uploadDocumentUrl = '';
    ehPdf = false;
    isHideLoading = true;

    columns: DatatableColumn[] = [];
    pageActions: PoPageAction[] = [];

    @ViewChild('modalEnviarNota', { static: true })
    poModalEnviarNota: PoModalComponent;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @ViewChild('modalCancelarNota', { static: true })
    poModalCancelarNota: PoModalComponent;


    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Anexar Nota Fiscal',
            action: (item) => {
                this.openModal(item);
            },
            disabled: (item) => item.status !== 'PROCESSING',
        },
        {
            label: 'Confirmar Cancelamento',
            action: (item) => {
                this.openModal(item);
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
            this.poDialogService.confirm({
                title: 'Cancelar Nota',
                message: `Tem certeza que deseja cancelar a nota fiscal ?`,
                confirm: () => {
                    this.adminInvoiceService
                        .cancelInvoiceAdmin(this.modalInvoice.id)
                        .subscribe(() => this.refreshTable());
                    this.poModalCancelarNota.close();
                },
            });

        },
    };

    closeModalCancelInvoice: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCancelarNota.close(),
    };

    constructor(
        private adminInvoiceService: InvoiceListService,
        private poNotificationService: PoNotificationService,
        private poDialogService: PoDialogService,
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
                property: 'companyFantasyName',
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

    onLoad(): void {
        this.isHideLoading = false;
    }

    success(): void {
        this.refreshTable();
        this.isHideLoading = true;
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.poModalEnviarNota.close();
    }

    download(): any {
        window.open(this.modalInvoice.attachmentUrl, '_blank');
    }

    openModal(item: Invoice): void {
        this.modalInvoice = item;
        this.uploadDocumentUrl = `${environment.apiUrl}/nota-fiscal/${this.modalInvoice.id}/file`;
        this.companyDocument$ = this.adminInvoiceService.getCompany(this.modalInvoice.companyId);
        this.invoiceProductList$ = this.adminInvoiceService.getInvoice(item.id);
        this.modalInvoice.status == 'WAITING_CANCELEMENT' ? this.poModalCancelarNota.open() : this.poModalEnviarNota.open();
    }

    refreshTable(): void {
        this.dataTableComponent.loadItems();
    }
}
