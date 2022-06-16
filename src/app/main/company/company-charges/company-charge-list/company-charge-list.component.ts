import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';

import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { Charge } from '../../../../shared/components/charge-form/models/charge';
import { PageDatatableComponent } from '../../../../shared/components/page-datatable/page-datatable/page-datatable.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './company-charge-list.component.html',
})
export class CompanyChargeListComponent {

    modalCharge: Charge = null;
    isPdfCobranca = false;
    urlUploadDocument: string;
    serviceApi = `${environment.apiUrl}/company/billing/p/search?status=${this.activatedRoute.snapshot.params.filter ? this.activatedRoute.snapshot.params.filter : ''}`;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @ViewChild('modalCobranca', { static: true })
    poModalCobranca: PoModalComponent;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Cobranças', link: '/admin/cobrancas' },
        ],
    };

    closeAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCobranca.close(),
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Enviar Comprovante de Pagamento',
            action: (item) => {
                this.prepareModal(item);
            },
            disabled: (item) => item.status !== 'PENDING' && item.status !== 'REFUSED' && item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Baixar Comprovante',
            action: (item) => window.open(item.proofOfPaymentUrl, '_blank'),
            disabled: (item) => !item.proofOfPaymentUrl,
        },
        {
            label: 'Baixar Cobrança',
            action: (item) => window.open(item.billingFileUrl, '_blank'),
            disabled: (item) => item.status === 'NOT_FINALIZED',
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'status',
            type: 'label',
            labels: [
                { value: 'NOT_FINALIZED', color: 'color-03', label: 'Incompleto' },
                { value: 'PENDING', color: 'color-07', label: 'Pendente' },
                { value: 'PENDING_REVIEW', color: 'color-08', label: 'Revisão' },
                { value: 'PAID', color: 'color-12', label: 'Pago' },
                { value: 'REFUSED', color: 'color-05', label: 'Recusado' },
                { value: 'CANCELED', color: 'color-06', label: 'Cancelado' },
            ],
        },
        {
            label: 'Título',
            property: 'description',
        },
        { label: 'Tipo', property: 'type.label' },
        {
            label: 'Vencimento',
            property: 'dueDate',
            type: 'date',
            format: 'dd/MM/yyyy',
        },
        { label: 'Valor', property: 'value', type: 'currency', format: 'BRL' },
    ];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    constructor(
        private poNotificationService: PoNotificationService,
        private activatedRoute: ActivatedRoute,
    ) {}

    prepareModal(charge: Charge): void {
        this.modalCharge = charge;
        this.urlUploadDocument = `${environment.apiUrl}/company/billing/${this.modalCharge.id}/proof-of-payment`;
        this.modalCharge.billingFileUrl.indexOf('pdf') < 0 ? this.isPdfCobranca = false : this.isPdfCobranca = true;
        this.poModalCobranca.open();
    }

    download(docummentLink: string): any {
        window.open(docummentLink, '_blank');
    }

    ReloadTable(): void {
        this.dataTableComponent.loadItems();
    }

    success(): void {
        const message = 'Comprovante de pagamento carregado com sucesso';
        this.poNotificationService.success(message);
        this.ReloadTable();
        this.poModalCobranca.close();
    }
}
