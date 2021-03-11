import { Component, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';

import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { BankStatement } from '../models/bank-statement';
import { PageDatatableComponent } from '../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    templateUrl: './company-bank-statement.component.html',
    styleUrls: ['company-bank-statement.component.scss'],
})
export class CompanyBankStatementComponent {

    serviceApi = `${environment.apiUrl}/company/statement/p/search`;
    urlUploadDocument = null;
    modalBankStatement: BankStatement = null;

    @ViewChild('modalExtrato', { static: true })
    poModalExtrato: PoModalComponent;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

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

    tableActions: PoTableAction[] = [
        {
            label: 'Anexar Extrato',
            action: (item) => this.prepareModal(item),
            disabled: (item) => item.status === 'OK',
        },
        // {
        //     label: 'Ver Extrato',
        //     action: (item) => this.prepareModal(item),
        //     disabled: (item) => item.status === 'OK',
        // },
        {
            label: 'Baixar Extrato',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) => item.status === 'PENDING',
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
        private poNotificationService: PoNotificationService,
    ) {}

    prepareModal(extrato: BankStatement): void {
        this.modalBankStatement = extrato;
        this.urlUploadDocument = `${environment.apiUrl}/company/statement/${extrato.id}`;
        this.poModalExtrato.open();
    }

    success(): void {
        const message = 'Extrato bancário carregado com sucesso';
        this.poNotificationService.success(message);
        this.dataTableComponent.loadItems();
        this.poModalExtrato.close();
    }
}
