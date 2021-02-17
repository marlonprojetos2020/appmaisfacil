import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { AdminBankStatementsService } from '../../admin-bank-statements.service';
import { BankStatement } from '../../../../company/company-bank-statements/models/bank-statements';

@Component({
    templateUrl: './admin-bank-statement-list.component.html',
    styleUrls: ['admin-bank-statement.component.scss'],
})
export class AdminBankStatementListComponent implements OnInit {
    @Input() companyName: string;
    @Input() month: string;
    @Input() status: string;
    @Input() bankName: string;
    @Input() image: string;
    @Input() pdfPendente: string;
    @Input() pdfPago: string;
    idStatement: number;
    @ViewChild('modalExtratoPendente', { static: true })
    poModalExtratoPendente: PoModalComponent;

    @ViewChild('modalExtratoAprovado', { static: true })
    poModalExtratoAprovado: PoModalComponent;

    ehPdfPendente = false;
    ehPdfPago = false;

    primaryAction: PoModalAction = {
        label: 'Aprovar',
        action: () => {
            this.adminBankStatementService
                .aprovedStatement(this.idStatement)
                .subscribe((data) => (this.status = data.statusText));
            this.poModalExtratoPendente.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoPendente.close(),
    };

    pageActions: PoPageAction[] = [];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Extratos', link: 'admin/extratos' },
        ],
    };

    serviceApi = `${environment.apiUrl}/statement/p/search`;

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

    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'statusText',
        },
        {
            label: 'Empresa',
            property: 'bankAccountCompanyName',
        },
        {
            label: 'Banco',
            property: 'bankAccount.bankName',
        },
        {
            label: 'Mês de Referência',
            property: 'monthText',
        },
    ];

    // ModalExtratoAprovado

    closeModalExtratoAprovado: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoAprovado.close(),
    };

    constructor(
        private adminBankStatementService: AdminBankStatementsService
    ) {}

    ngOnInit(): void {}

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
