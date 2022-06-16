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
import { Charge } from '../charge';
import { AdminChargesService } from '../admin-charges.service';
import { PageDatatableComponent } from '../../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    selector: 'app-charge-list',
    templateUrl: './charge-list.component.html',
})

export class ChargeListComponent implements OnInit {

    @Input() serviceApi: string;
    @Input() showCompanyField: boolean;
    @Input() breadcrumb: PoBreadcrumb;
    @Input() pageActions: PoPageAction[] = null;

    modalCharge: Charge = null;

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
            this.adminChargeService.paidCharge(this.modalCharge.id).subscribe(() => {
                this.ReloadTable();
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
                        .recuseCharge(this.modalCharge.id)
                        .subscribe(() => {
                            this.ReloadTable();
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
                this.openModalComprovante(item);
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
                        this.adminChargeService.canceledCharge(item.id).subscribe(() => {
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
                    { value: 'REFUSED', color: 'color-05', label: 'Recusado' },
                    { value: 'CANCELED', color: 'color-06', label: 'Cancelado' },
                ],
            },
            { label: 'Empresa', property: 'companyFantasyName', visible: this.showCompanyField, disableSort: true },
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
    }

    openModalComprovante(charge: Charge): void {
        this.modalCharge = charge;
        this.modalCharge.proofOfPaymentUrl.indexOf('pdf') < 0 ? this.isPdfComprovante = false : this.isPdfComprovante = true;
        this.poModalComprovante.open();
    }

    openModalCobranca(charge: Charge = null): void {
        if (charge) {
            this.modalCharge = charge;
            this.modalCharge.billingFileUrl?.indexOf('pdf') < 0 ? this.isPdfCobranca = false : this.isPdfCobranca = true;
        }
        this.poModalCobranca.open();
    }

    ReloadTable(): void {
        this.dataTableComponent.loadItems();
    }

    download(docummentLink: string): any {
        window.open(docummentLink, '_blank');
    }
}


