import { Component } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './company-employee.component.html',
})
export class CompanyEmployeeComponent {
    pageActions: PoPageAction[] = [
        {
            label: 'Novo Funcionário',
            icon: 'po-icon-plus-circle',
            url: `/empresa/funcionarios/cadastro`,
        },
    ];

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
