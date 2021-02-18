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
import { PageDatatableComponent } from '../../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

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
    @Input() pdfCobranca: string;
    @Input() pdfComprovante: string;
    @Input() imagemCobranca: string;
    @Input() imagemComprovante: string;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    isPdfCobranca = false;
    isPdfComprovante = false;

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
            this.adminChargeService.paidCharge(this.idCharge).subscribe(() => {
                this.dataTableComponent.ngOnInit();
                this.poNotificationService.success(
                    'Comprovante de pagamento aprovado com sucesso'
                );
            });
            this.poModalComprovante.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Recusar',
        action: () => {
            this.adminChargeService
                .recuseCharge(this.idCharge)
                .subscribe(() => {
                    this.dataTableComponent.ngOnInit();
                    this.poNotificationService.success(
                        'Comprovante de pagamento recusado com sucesso'
                    );
                });
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
        {
            label: 'Vencimento',
            property: 'dueDate',
            type: 'date',
            format: 'dd/MM/yyyy',
        },
        { label: 'Valor', property: 'value', type: 'currency', format: 'BRL' },
        { label: 'Empresa', property: 'companyName' },
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
        this.tableActions.push(
            {
                label: 'Confirmar Pagamento',
                action: (item) => {
                    item.companyFantasyName
                        ? (this.nomeEmpresa = item.companyFantasyName)
                        : (this.nomeEmpresa = item.companyName);
                    this.prepareModal(item);
                    this.status = item.statusText;
                    this.tipo = item['type.label'];
                    this.valor = item.value;
                    this.vencimento = item.dueDate;
                    this.titulo = item.description;
                    this.imagemCobranca = item.billingFileUrl;
                    this.idCharge = item.id;
                    this.charge = item;
                    if (this.imagemCobranca.indexOf('pdf') < 0) {
                        this.isPdfCobranca = false;
                    } else {
                        this.isPdfCobranca = true;
                        this.pdfCobranca = item.billingFileUrl;
                    }
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
                    item.companyFantasyName
                        ? (this.nomeEmpresa = item.companyFantasyName)
                        : (this.nomeEmpresa = item.companyName);
                    this.poModalVisualizarComprovante.open();
                    this.status = item.statusText;
                    this.tipo = item['type.label'];
                    this.valor = item.value;
                    this.vencimento = item.dueDate;
                    this.titulo = item.description;
                    this.imagemComprovante = item.proofOfPaymentUrl;
                    this.idCharge = item.id;
                    this.charge = item;
                    if (this.imagemComprovante.indexOf('pdf') < 0) {
                        this.isPdfComprovante = false;
                    } else {
                        this.isPdfComprovante = true;
                        this.pdfComprovante = item.proofOfPaymentUrl;
                    }
                },
                disabled: (item) => item.status !== 'PAID',
            },
            {
                label: 'Visitar Empresa',
                action: (item) => {
                    this.router.navigateByUrl(
                        `/admin/empresa/${item.companyId}`
                    );
                },
            }
        );
    }

    prepareModal(charge: Charge): void {
        this.poModalComprovante.open();
    }

    openModalCobranca(): void {
        this.poModalCobranca.open();
    }

    downloadPdfCobranca(): any {
        window.open(this.pdfCobranca, '_blank');
    }

    downloadImgCobranca(): any {
        window.open(this.imagemCobranca, '_blank');
    }

    downloadPdfComprovante(): any {
        window.open(this.pdfComprovante, '_blank');
    }

    downloadImgComprovante(): any {
        window.open(this.imagemComprovante, '_blank');
    }
}
