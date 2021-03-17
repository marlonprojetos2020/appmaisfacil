import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';

import { environment } from 'src/environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';


@Component({
    templateUrl: './company-list.component.html',
})
export class CompanyListComponent {

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
        ],
    };

    pageActions: PoPageAction[] = [
        {
            label: 'Nova Empresa',
            icon: 'po-icon-plus-circle',
            url: 'admin/empresas/nova-empresa',
        },
    ];

    serviceApi = `${environment.apiUrl}/users/p/search`;

    tableActions: PoTableAction[] = [
        {
            label: 'Editar',
            icon: 'po-icon po-icon-edit',
            action: (item) =>
                this.router.navigateByUrl(`/admin/empresa/${item.id}/editar`),
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Nome Fantasia',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'CNPJ',
            property: 'userCompany.cnpj',
        },
        { property: 'name', label: 'Usuário' },
    ];

    selecionaEmpresa = (item) => this.router.navigateByUrl(`/admin/empresa/${item.id}`);

    constructor(private router: Router) {}
}
