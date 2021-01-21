import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { AdminBankStatementsService } from '../../admin-bank-statements.service';

@Component({
    templateUrl: './admin-bank-statement-list.component.html',
})
export class AdminBankStatementListComponent implements OnInit {
    pageActions: PoPageAction[] = [];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Extratos', link: 'admin/extratos' },
        ],
    };

    serviceApi = `${environment.apiUrl}/statement/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
        },
        {
            label: 'Empresa',
            property: 'oi',
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
}
