import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoDialogService,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';

import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { BankStatementListService } from '../bank-statement-list.service';
import { BankStatement } from '../bank-statement';
import { PageDatatableComponent } from '../../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    selector: 'app-bank-statement-list',
    templateUrl: './bank-statement-list.component.html'
})

export class BankStatementListComponent implements OnInit {

    @Input() serviceApi = null;
    @Input() breadcrumb: PoBreadcrumb = null;
    @Input() showCompanyField: boolean;

    modalBankStatement: BankStatement = null;
    ehPdfPendente = false;
    ehPdfPago = false;
    pageActions: PoPageAction[] = [];
    columns: DatatableColumn[] = [];

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @ViewChild('modalExtratoPendenteRevisao', { static: true })
    poModalExtratoPendente: PoModalComponent;

    primaryAction: PoModalAction = {
        label: 'Aprovar',
        action: () => this.aprovarExtrato(this.modalBankStatement.id),
    };

    secondaryAction: PoModalAction = {
        label: 'Reprovar',
        action: () => this.reprovarExtrato(this.modalBankStatement.id),
        // disabled: this.modalBankStatement?.status !== 'PENDING_REVIEW' ? true : false,
    };

    // ModalExtratoAprovado
    closeModalExtratoAprovado: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoPendente.close(),
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar Extrato',
            action: (item) => this.prepareModal(item),
            disabled: (item) => item.status === 'PENDING',
        },
        {
            label: 'Aprovar Extrato',
            action: (item) => this.aprovarExtrato(item.id),
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Reprovar Extrato',
            action: (item) => this.reprovarExtrato(item.id),
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Baixar Extrato',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) => item.status === 'PENDING',
        },
    ];

    constructor(
        private bankStatementListService: BankStatementListService,
        private poNotification: PoNotificationService,
        private poDialogService: PoDialogService,
    ) {}

    ngOnInit(): void {
        this.columns = [
            {
                label: 'Status',
                property: 'status',
                type: 'label',
                labels: [
                    { value: 'PENDING', color: 'color-07', label: 'Pendente' },
                    { value: 'PENDING_REVIEW', color: 'color-08', label: 'Revisão' },
                    { value: 'OK', color: 'color-12', label: 'OK' },
                    { value: 'REFUSED', color: 'color-05', label: 'Recusado' },
                ],
            },
            {
                label: 'Empresa',
                property: 'bankAccountCompanyFantasyName',
                disableSort: true,
                visible: this.showCompanyField,
            },
            {
                label: 'Banco',
                property: 'bankAccount.bankName',
            },
            {
                label: 'Tipo de Conta',
                property: 'bankAccount.accountType',
                type: 'label',
                labels: [
                    { value: 'POUPANÇA', color: 'color-11', label: 'Poupança' },
                    { value: 'CORRENTE', color: 'color-08', label: 'Corrente' },
                ],
            },
            {
                label: 'Agência',
                property: 'bankAccount.agency',
            },
            {
                label: 'Conta',
                property: 'bankAccount.accountNumber',
            },
            {
                label: 'Mês de Referência',
                property: 'monthText',
            },
        ];
    }

    prepareModal(extrato: BankStatement): void {
        this.modalBankStatement = extrato;
        if (this.modalBankStatement.attachmentUrl.indexOf('pdf') < 0) {
            this.ehPdfPendente = false;
        } else {
            this.ehPdfPendente = true;
        }
        this.poModalExtratoPendente.open();
    }

    download(link: string): void {
        window.open(link, '_blank');
    }

    refreshTable(): void {
        this.dataTableComponent.loadItems();
    }

    aprovarExtrato(id): void {
        this.poDialogService.confirm({
            title: 'Aprovar Extrato',
            message: `Tem certeza que deseja aprovar este extrato ?`,
            confirm: () => {
                this.bankStatementListService
                    .aprovedStatement(id)
                    .subscribe(() => {
                        this.refreshTable();
                        this.poNotification.success('Extrato bancário aprovado');
                    });
            },
        });
    }

    reprovarExtrato(id): void {
        this.poDialogService.confirm({
            title: 'Rejeitar Extrato',
            message: `Tem certeza que deseja rejeitar o extrato?`,
            confirm: () => {
                this.bankStatementListService
                    .rejectStatement(id)
                    .subscribe(() => {
                        this.refreshTable();
                        this.poNotification.success('Extrato bancário rejeitado');
                    });
            },
        });
    }
}
