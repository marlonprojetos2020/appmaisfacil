import {Component} from '@angular/core';
import {PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/components/page-datatable/page-datatable/datatable-column';
import {Router} from '@angular/router';

@Component({
    templateUrl: './company-bank-statement.component.html',
})
export class CompanyBankStatementComponent {
    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'userCompany.fantasyName',
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

    constructor(private router: Router) {
    }
}
