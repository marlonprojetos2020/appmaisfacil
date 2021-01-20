import { Component } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './admin-bank-statement-list.component.html',
})
export class AdminBankStatementListComponent {
    pageActions: PoPageAction[] = [];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Extratos', link: 'admin/extratos' },
        ],
    };

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'Empresa',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Banco',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Mês de Referência',
            property: 'name',
        },
    ];

    constructor() {}
}
