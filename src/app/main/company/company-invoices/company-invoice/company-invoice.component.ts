import {Component} from '@angular/core';
import {PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/components/page-datatable/page-datatable/datatable-column';
import {Router} from '@angular/router';

@Component({
    templateUrl: './company-invoice.component.html',
})
export class CompanyInvoiceComponent{
    pageActions: PoPageAction[] = [{
        label: 'Emitir Nota',
        icon: 'po-icon-plus-circle',
        url: '/empresa/nota-fiscal/emitir-nota',
    }];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'Cliente',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Emissão',
            property: 'name',
        },
        {
            label: 'Valor',
            property: 'name',
        },
        {
            label: 'Impostos',
            property: 'name',
        },
    ];

    constructor(private router: Router) {
    }
}
