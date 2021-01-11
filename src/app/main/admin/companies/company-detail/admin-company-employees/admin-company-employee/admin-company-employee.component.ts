import { Component } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/page-datatable/datatable-column';

@Component({
    templateUrl: './admin-company-employee.component.html',
    styleUrls: ['admin-company-employee.component.scss'],
})
export class AdminCompanyEmployeeComponent {
    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'Nome',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Categoria',
            property: 'name',
        },
        {
            label: 'Admissão',
            property: 'name',
        },
    ];

    constructor() {}
}
