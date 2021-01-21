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

    idCharge: number;

    urlUploadDocument: string;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Cobranças', link: '/admin/cobrancas' },
        ],
    };

    @ViewChild('modalCobranca', { static: true })
    poModalCobranca: PoModalComponent;

    closeAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCobranca.close(),
    };

    serviceApi = `${environment.apiUrl}/company/billing/p/search`;
    tableActions: PoTableAction[] = [];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'status',
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
                label: 'Pagar Cobrança',
                action: (item) => {
                    this.prepareModal(item);
                    this.status = item.status;
                    this.tipo = item['type.label'];
                    this.valor = item.value;
                    this.vencimento = item.dueDate;
                    this.titulo = item.description;
                    this.nomeEmpresa;
                    this.imagemCobranca = item.billingFileUrl;
                    this.setUrlDocument(item.id);
                    this.idCharge = item.id;
                },
                disabled: (item) => item.status === 'PAID',
            },
            {
                label: 'Baixar Comprovante',
                action: (item) => window.open(item.proofOfPaymentUrl, '_blank'),
                disabled: (item) => !item.proofOfPaymentUrl,
            }
        );
    }

    prepareModal(charge: Charge): void {
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
            .subscribe((data) => (this.status = data.status));
        this.poModalCobranca.close();
    }
}
