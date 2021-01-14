import { Component } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './admin-company-invoice.component.html',
})
export class AdminCompanyInvoiceComponent {
    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'userCompany.fantasyName',
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
