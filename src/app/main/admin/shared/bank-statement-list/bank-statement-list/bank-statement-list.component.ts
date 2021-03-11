import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
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

    @ViewChild('modalExtratoAprovado', { static: true })
    poModalExtratoAprovado: PoModalComponent;

    primaryAction: PoModalAction = {
        label: 'Aprovar',
        action: () => {
            this.bankStatementListService
                .aprovedStatement(this.modalBankStatement.id)
                .subscribe(() => {
                    this.refreshTable();
                    this.poNotification.success('Extrato bancário aprovado');
                });
            this.poModalExtratoPendente.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Reprovar',
        action: () => {
            // this.bankStatementListService.
            // refreshTable();
            // this.poModalExtratoPendente.close();
        },
    };

    // ModalExtratoAprovado
    closeModalExtratoAprovado: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoAprovado.close(),
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Aprovar Extrato',
            action: (item) => this.prepareModal(item),
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Visualizar Extrato',
            action: (item) => {
                this.poModalExtratoAprovado.open();
            },
            disabled: (item) => item.status !== 'OK',
        },
        {
            label: 'Baixar Extrato',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) =>
                item.status !== 'OK' && item.status !== 'PENDING_REVIEW',
        },
    ];

    constructor(
        private bankStatementListService: BankStatementListService,
        private poNotification: PoNotificationService,
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
}
