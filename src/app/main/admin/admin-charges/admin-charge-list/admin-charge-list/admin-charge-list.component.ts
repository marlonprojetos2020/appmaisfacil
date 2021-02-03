import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { environment } from 'src/environments/environment';
import { Charge } from '../../../../../shared/components/charge-form/models/charge';
import { AdminChargesService } from '../../admin-charges.service';

@Component({
    styleUrls: ['./admin-carge-list.component.scss'],
    templateUrl: './admin-charge-list.component.html',
})
export class AdminChargeListComponent implements OnInit {
    @Input() nomeEmpresa: string;
    @Input() status: string;
    @Input() tipo: string;
    @Input() vencimento: string;
    @Input() valor: number;
    @Input() titulo: string;
    @Input() imagemCobranca: string;
    @Input() imagemComprovante: string;

    charge;

    idCharge: number;

    urlUploadDocument: string;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Cobranças', link: '/admin/cobrancas' },
        ],
    };

    @ViewChild('modalComprovante', { static: true })
    poModalComprovante: PoModalComponent;

    primaryAction: PoModalAction = {
        label: 'Confirmar',
        action: () => {
            this.adminChargeService
                .paidCharge(this.idCharge)
                .subscribe((data) => (this.status = data.status));
            this.poModalComprovante.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Recusar',
        action: () => {
            this.adminChargeService.recuseCharge(this.idCharge).subscribe();
            this.poModalComprovante.close();
        },
    };

    closeAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCobranca.close(),
    };

    @ViewChild('modalCobranca', { static: true })
    poModalCobranca: PoModalComponent;

    serviceApi = `${environment.apiUrl}/billing/p/search`;
    tableActions: PoTableAction[] = [];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Título',
            property: 'description',
        },
        { label: 'Tipo', property: 'type.label' },
        { label: 'Vencimento', property: 'dueDate' },
        { label: 'Valor', property: 'value' },
    ];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    @ViewChild('modalVisualizarComprovante', { static: true })
    poModalVisualizarComprovante: PoModalComponent;

    closeActionModalVisualizarComprovante: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalVisualizarComprovante.close(),
    };

    constructor(
        private router: Router,
        private poNotificationService: PoNotificationService,
        private adminChargeService: AdminChargesService
    ) {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.nomeEmpresa = company.userDetails.name;

        this.tableActions.push(
            {
                label: 'Confirmar Pagamento',
                action: (item) => {
                    this.prepareModal(item);
                    this.status = item.statusText;
                    this.tipo = item['type.label'];
                    this.valor = item.value;
                    this.vencimento = item.dueDate;
                    this.titulo = item.description;
                    this.nomeEmpresa;
                    this.imagemComprovante = item.proofOfPaymentUrl;
                    this.imagemCobranca = item.billingFileUrl;
                    this.setUrlDocument(item.id);
                    this.idCharge = item.id;
                    this.charge = item;
                },
                disabled: (item) => item.status !== 'PENDING_REVIEW',
            },
            {
                label: 'Baixar Comprovante',
                action: (item) => window.open(item.proofOfPaymentUrl, '_blank'),
                disabled: (item) => item.status !== 'PAID',
            },
            {
                label: 'Visualizar Comprovante',
                action: (item) => {
                    this.poModalVisualizarComprovante.open();
                    this.status = item.statusText;
                    this.tipo = item['type.label'];
                    this.valor = item.value;
                    this.vencimento = item.dueDate;
                    this.titulo = item.description;
                    this.nomeEmpresa;
                    this.imagemComprovante = item.proofOfPaymentUrl;
                    this.imagemCobranca = item.billingFilelUrl;
                    this.setUrlDocument(item.id);
                    this.idCharge = item.id;
                    this.charge = item;
                },
                disabled: (item) => item.status !== 'PAID',
            }
        );
    }

    prepareModal(charge: Charge): void {
        this.poModalComprovante.open();
    }

    openModalCobranca(): void {
        this.poModalCobranca.open();
    }

    setUrlDocument(id: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/billing/${id}/proof-of-payment`;
    }

    success(): void {
        const message = 'Comprovante de pagamento carregado com sucesso';
        this.poNotificationService.success(message);
        this.adminChargeService
            .paidCharge(this.idCharge)
            .subscribe((data) => (this.status = data.statusText));
        this.poModalComprovante.close();
    }
}
