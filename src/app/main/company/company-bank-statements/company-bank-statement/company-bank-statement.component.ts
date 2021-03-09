import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { Router } from '@angular/router';
import { BankStatement } from '../models/bank-statements';
import { CompanyBankStatementService } from '../company-bank-statement.service';
import { PageDatatableComponent } from '../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    templateUrl: './company-bank-statement.component.html',
    styleUrls: ['company-bank-statement.component.scss'],
})
export class CompanyBankStatementComponent implements OnInit {
    @ViewChild('modalExtrato', { static: true })
    poModalExtrato: PoModalComponent;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @Input()
    bankName: string;
    @Input() status: string;
    @Input() month: string;
    @Input() nomeEmpresa: string;
    // pageActions: PoPageAction[] = [
    //     {
    //         label: 'Novo Extrato',
    //         icon: 'po-icon-plus',
    //         url: '/empresa/extrato/novo-extrato',
    //     },
    // ];

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
            label: 'Anexar Extrato',
            action: (item) => {
                this.prepareModal(item);
                this.bankName = item['bankAccount.bankName'];
                this.nomeEmpresa;
                this.month = item.monthText;
                this.status = item.statusText;
                this.setUrlDocument(item.id);
            },
            disabled: (item) => item.status !== 'PENDING',
        },
    ];

    columns: DatatableColumn[] = [
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
            label: 'Banco',
            property: 'bankAccount.bankName',
        },
        {
            label: 'Conta',
            property: 'bankAccount.accountNumber',
        },
        {
            label: 'Agência',
            property: 'bankAccount.agency',
        },
        {
            label: 'Mês de Referência',
            property: 'monthText',
        },
    ];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    constructor(
        private router: Router,
        private poNotificationService: PoNotificationService,
        private companyBankStatement: CompanyBankStatementService
    ) {}

    ngOnInit(): void {
        this.companyBankStatement
            .getCompany()
            .subscribe((data) =>
                data.userCompany?.fantasyName
                    ? (this.nomeEmpresa = data.userCompany.fantasyName)
                    : (this.nomeEmpresa = data.name)
            );
    }

    prepareModal(extrato: BankStatement): void {
        this.poModalExtrato.open();
    }

    setUrlDocument(id: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/statement/${id}`;
    }

    success(): void {
        const message = 'Extrato bancário carregado com sucesso';
        this.poNotificationService.success(message);
        this.dataTableComponent.ngOnInit();
        this.poModalExtrato.close();
    }
}
