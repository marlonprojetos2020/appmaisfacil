import { Component } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/page-datatable/datatable-column';

@Component({
    templateUrl: 'admin-employee.component.html',
})
export class AdminEmployeeComponent {
    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'Empresa',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Funcionário',
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
