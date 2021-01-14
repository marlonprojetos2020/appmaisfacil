import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './company-list.component.html',
})
export class CompanyListComponent {
    pageActions: PoPageAction[] = [{
        label: 'Nova Empresa',
        icon: 'po-icon-plus-circle',
        url: 'admin/empresas/nova-empresa',
    }];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) =>
                this.router.navigateByUrl(`/admin/empresa/${item.id}`),
        },
    ];
    columns: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'CNPJ',
            property: 'userCompany.cnpj',
        },
        { property: 'name', label: 'Usuário' },
    ];

    constructor(private router: Router) {}
}
