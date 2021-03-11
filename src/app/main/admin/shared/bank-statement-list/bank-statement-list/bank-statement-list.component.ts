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
import { BankStatement } from '../../../../company/company-bank-statements/models/bank-statements';
import { PageDatatableComponent } from '../../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    selector: 'app-bank-statement-list',
    templateUrl: './bank-statement-list.component.html'
})

export class BankStatementListComponent implements OnInit {

    @Input() serviceApi = null;
    @Input() breadcrumb: PoBreadcrumb = null;
    @Input() showCompanyField: boolean;

    companyName: string;
    month: string;
    status: string;
    bankName: string;
    image: string;
    pdfPendente: string;
    pdfPago: string;
    idStatement: number;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @ViewChild('modalExtratoPendente', { static: true })
    poModalExtratoPendente: PoModalComponent;

    @ViewChild('modalExtratoAprovado', { static: true })
    poModalExtratoAprovado: PoModalComponent;

    ehPdfPendente = false;
    ehPdfPago = false;

    primaryAction: PoModalAction = {
        label: 'Aprovar',
        action: () => {
            this.bankStatementListService
                .aprovedStatement(this.idStatement)
                .subscribe(() => {
                    this.dataTableComponent.ngOnInit();
                    this.poNotification.success('Extrato bancário aprovado');
                });
            this.poModalExtratoPendente.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoPendente.close(),
    };

    pageActions: PoPageAction[] = [];

    tableActions: PoTableAction[] = [
        {
            label: 'Aprovar Extrato',
            action: (item) => {
                item.bankAccountCompanyFantasyName
                    ? (this.companyName = item.bankAccountCompanyFantasyName)
                    : (this.companyName = item.bankAccountCompanyName);
                this.prepareModal(item);
                this.status = item.statusText;
                this.bankName = item['bankAccount.bankName'];
                this.month = item.month;
                this.image = item.attachmentUrl;
                this.idStatement = item.id;
                if (this.image.indexOf('pdf') < 0) {
                    this.ehPdfPendente = false;
                } else {
                    this.ehPdfPendente = true;
                    this.pdfPendente = item.attachmentUrl;
                }
            },
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Baixar Comprovante',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) =>
                item.status !== 'OK' && item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Visualizar Extrato',
            action: (item) => {
                this.poModalExtratoAprovado.open();
                this.status = item.statusText;
                this.bankName = item['bankAccount.bankName'];
                item.bankAccountCompanyFantasyName
                    ? (this.companyName = item.bankAccountCompanyFantasyName)
                    : (this.companyName = item.bankAccountCompanyName);
                this.image = item.attachmentUrl;
                this.month = item.month;
                if (this.image.indexOf('pdf') < 0) {
                    this.ehPdfPago = false;
                } else {
                    this.ehPdfPago = true;
                    this.pdfPago = item.attachmentUrl;
                }
            },
            disabled: (item) => item.status !== 'OK',
        },
    ];

    columns: DatatableColumn[] = [];

    // ModalExtratoAprovado
    closeModalExtratoAprovado: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoAprovado.close(),
    };

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
                    { value: 'CORRENTE', color: 'color-08', label: 'Corrente' }
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
        this.poModalExtratoPendente.open();
    }

    downloadPdfPendente(): any {
        window.open(this.pdfPendente, '_blank');
    }

    downloadImg(): any {
        window.open(this.image, '_blank');
    }

    downloadPdfPago(): any {
        window.open(this.pdfPago, '_blank');
    }

}