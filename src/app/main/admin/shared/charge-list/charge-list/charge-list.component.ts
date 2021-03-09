import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { Charge } from '../../../../../shared/components/charge-form/models/charge';
import { AdminChargesService } from '../admin-charges.service';
import { PageDatatableComponent } from '../../../../../shared/components/page-datatable/page-datatable/page-datatable.component';
import { AdminCompanyChargeService } from '../../../companies/company-detail/admin-company-charges/admin-company-charge.service';

@Component({
    selector: 'app-charge-list',
    templateUrl: './charge-list.component.html',
})

export class ChargeListComponent implements OnInit {

    @Input() serviceApi: string;
    @Input() showCompanyField: boolean;
    @Input() breadcrumb: PoBreadcrumb;
    @Input() pageActions: PoPageAction[] = null;

    idCharge: number;
    nomeEmpresa: string;
    status: string;
    tipo: string;
    vencimento: string;
    valor: number;
    titulo: string;
    pdfCobranca: string;
    pdfComprovante: string;
    imagemCobranca: string;
    imagemComprovante: string;
    charge;

    isPdfCobranca = false;
    isPdfComprovante = false;
    urlUploadDocument: string;

    @ViewChild('modalComprovante', { static: true })
    poModalComprovante: PoModalComponent;

    @ViewChild('modalCobranca', { static: true })
    poModalCobranca: PoModalComponent;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;


    primaryAction: PoModalAction = {
        label: 'Confirmar',
        action: () => {
            this.adminChargeService.paidCharge(this.idCharge).subscribe(() => {
                this.dataTableComponent.loadItems();
                this.poNotificationService.success('Comprovante de pagamento aprovado com sucesso');
            });
            this.poModalComprovante.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Recusar',
        action: () => {
            this.poDialogService.confirm({
                title: 'Recusar Cobrança',
                message: `Tem certeza que deseja recusar a cobrança ?`,
                confirm: () => {
                    this.adminChargeService
                        .recuseCharge(this.idCharge)
                        .subscribe(() => {
                            this.dataTableComponent.loadItems();
                            this.poNotificationService.success('Comprovante de pagamento recusado com sucesso');
                        });
                    this.poModalComprovante.close();
                }
            });
        },
    };

    closeAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCobranca.close(),
    };

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    // DADOS REFERENTE A TABELA
    // Colunas da tabela
    columns: DatatableColumn[] = [];

    // ações de cada linha da tabela
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar Cobrança',
            action: (item) => this.openModalCobranca(item),
            disabled: (item) => item.status === 'NOT_FINALIZED',
        },
        {
            label: 'Visualizar Comprovante',
            action: (item) => {
                this.prepareModal(item);
            },
            disabled: (item) => item.status !== 'PAID' && item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Confirmar Pagamento',
            action: (item) => {
                this.poDialogService.confirm({
                    title: 'Confirmar Pagamento',
                    message: `Tem certeza que deseja confirmar o pagamento da cobrança "${item.description}"?`,
                    confirm: () => {
                        this.adminChargeService.paidCharge(item.id).subscribe(() => {
                            this.poNotificationService.success(
                                'Cobrança registrada como paga',
                            );
                            item.status = 'PAID';
                        });
                    },
                });
            },
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Visitar Empresa',
            action: (item) => {
                this.router.navigateByUrl(
                    `/admin/empresa/${item.companyId}`,
                );
            },
        },
        {
            label: 'Cancelar',
            action: (item) => {
                this.poDialogService.confirm({
                    title: 'Cancelar Cobrança',
                    message: `Tem certeza que deseja cancelar a cobrança "${item.description}"?`,
                    confirm: () => {
                        this.chargeService.canceledCharge(item.id).subscribe(() => {
                            this.poNotificationService.success(
                                'Cobrança cancelada com sucesso',
                            );
                            item.status = 'CANCELED';
                        });
                    },
                });
            },
            disabled: (item) => item.status === 'CANCELED',
        },
    ];

    constructor(
        private router: Router,
        private poNotificationService: PoNotificationService,
        private adminChargeService: AdminChargesService,
        private chargeService: AdminCompanyChargeService,
        private poDialogService: PoDialogService,
    ) {}

    ngOnInit(): void {
        this.columns = [
            {
                label: 'Situação',
                property: 'status',
                type: 'label',
                labels: [
                    { value: 'NOT_FINALIZED', color: 'color-03', label: 'Incompleto' },
                    { value: 'PENDING', color: 'color-07', label: 'Pendente' },
                    { value: 'PENDING_REVIEW', color: 'color-08', label: 'Revisão' },
                    { value: 'PAID', color: 'color-12', label: 'Pago' },
                    { value: 'REFUSED', color: 'color-01', label: 'Recusado' },
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
            { label: 'Empresa', property: 'companyFantasyName', visible: this.showCompanyField },
        ];

    }

    prepareModal(charge: Charge): void {
        charge.companyFantasyName
            ? (this.nomeEmpresa = charge.companyFantasyName)
            : (this.nomeEmpresa = charge.companyName);
        this.status = charge.statusText;
        this.tipo = charge['type.label'];
        this.valor = charge.value;
        this.vencimento = charge.dueDate;
        this.titulo = charge.description;
        this.imagemCobranca = charge.billingFileUrl;
        this.imagemComprovante = charge.proofOfPaymentUrl;
        this.idCharge = charge.id;
        this.charge = charge;
        if (this.imagemCobranca.indexOf('pdf') < 0) {
            this.isPdfCobranca = false;
        } else {
            this.isPdfCobranca = true;
            this.pdfCobranca = charge.billingFileUrl;
        }
        this.poModalComprovante.open();
    }

    openModalCobranca(charge: Charge = null): void {
        if (charge) {
            charge.companyFantasyName
                ? (this.nomeEmpresa = charge.companyFantasyName)
                : (this.nomeEmpresa = charge.companyName);
            this.status = charge.statusText;
            this.tipo = charge['type.label'];
            this.valor = charge.value;
            this.vencimento = charge.dueDate;
            this.titulo = charge.description;
            this.imagemCobranca = charge.billingFileUrl;
            this.idCharge = charge.id;
        }
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


