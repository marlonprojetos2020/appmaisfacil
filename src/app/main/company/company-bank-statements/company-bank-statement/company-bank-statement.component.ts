import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { Router } from '@angular/router';
import { BankStatement } from '../models/bank-statements';

@Component({
    templateUrl: './company-bank-statement.component.html',
    styleUrls: ['company-bank-statement.component.scss'],
})
export class CompanyBankStatementComponent implements OnInit {
    @ViewChild('modalExtrato', { static: true })
    poModalExtrato: PoModalComponent;
    @Input()
    bankName: string;
    @Input() status: string;
    @Input() month: string;
    @Input() nomeEmpresa: string;
    pageActions: PoPageAction[] = [];

    urlUploadDocument: string;

    primaryAction: PoModalAction = {
        label: 'Cancelar',
        action: () => this.poModalExtrato.close(),
    };

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Meus Extratos', link: '/empresa/extrato' },
        ],
    };

    serviceApi = `${environment.apiUrl}/company/statement/p/search`;
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) => {
                console.log(item);
                this.prepareModal(item);
                this.bankName = item['bankAccount.bankName'];
                this.nomeEmpresa;
                this.month = item.month;
                this.status = item.status;
                this.setUrlDocument(item.id);
            },
            disabled: (item) => item.status !== 'PENDING',
        },
    ];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
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
        private router: Router,
        private poNotificationService: PoNotificationService
    ) {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.nomeEmpresa = company.userDetails.name;
    }

    prepareModal(extarto: BankStatement): void {
        this.poModalExtrato.open();
    }

    setUrlDocument(id: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/statement/${id}`;
    }

    success(): void {
        const message = 'Comprovante de pagamento carregado com sucesso';
        this.poNotificationService.success(message);
        (data) => console.log(data);
        this.poModalExtrato.close();
    }
}
