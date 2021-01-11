import { Component } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/page-datatable/datatable-column';

@Component({
    templateUrl: './charge-list.component.html',
})
export class ChargeListComponent {
    pageActions: PoPageAction[] = [];

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
            label: 'Titulo',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Tipo',
            property: 'name',
        },
        {
            label: 'Vencimento',
            property: 'name',
        },
        {
            label: 'Valor',
            property: 'name',
        },
    ];

    constructor() {}
}
