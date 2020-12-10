import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/page-datatable/datatable-column';

@Component({
    templateUrl: './company-list.component.html',
})
export class CompanyListComponent {
    pageActions: PoPageAction[] = [{ label: 'Nova Empresa', url: 'admin/empresas/nova-empresa' }];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) =>
                this.router.navigateByUrl(`/admin/empresa/${item.id}`),
        },
        // { label: 'Editar', action: item => this.router.navigateByUrl(`/admin/empresa/${item.id}/editar`) },
    ];
    columns: DatatableColumn[] = [
        { property: 'name', label: 'Nome' },
        { property: 'userCompany', label: 'CNPJ' },
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {}
}
