import { Component } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './admin-invoices-list.component.html',
})
export class AdminInvoiceListComponent {
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
            label: 'Valor',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Emissão',
            property: 'name',
        },
    ];

    constructor() {}
}
