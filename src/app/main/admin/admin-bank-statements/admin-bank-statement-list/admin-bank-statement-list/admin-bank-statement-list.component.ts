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
    idStatement: number;
    @ViewChild('modalExtrato', { static: true })
    poModalExtrato: PoModalComponent;

    primaryAction: PoModalAction = {
        label: 'Aprovar',
        action: () => {
            this.adminBankStatementService
                .aprovedStatement(this.idStatement)
                .subscribe((data) => (this.status = data.status));
            this.poModalExtrato.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtrato.close(),
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
            label: 'Visualizar',
            action: (item) => {
                console.log(item);
                this.prepareModal(item);
                this.status = item.status;
                this.bankName = item['bankAccount.bankName'];
                this.companyName = item.bankAccountCompanyName;
                this.month = item.month;
                this.image = item.attachmentUrl;
                console.log(this.image.indexOf('pdf'));
                this.idStatement = item.id;
            },
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Baixar Comprovante',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) => item.status !== 'OK',
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
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
            property: 'month',
        },
    ];

    constructor(
        private adminBankStatementService: AdminBankStatementsService
    ) {}

    ngOnInit(): void {}

    prepareModal(extrato: BankStatement): void {
        this.poModalExtrato.open();
    }
}
