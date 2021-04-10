import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    PoBreadcrumb,
    PoDialogService,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';

import { environment } from 'src/environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { CompaniesService } from '../../companies.service';


@Component({
    templateUrl: './company-list.component.html',
})
export class CompanyListComponent {

    @ViewChild(PageDatatableComponent) dataTableComponent: PageDatatableComponent;

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
        {
            label: 'Deletar',
            icon: 'po-icon po-icon-delete',
            action: (item) => this.deleteCompany(item),
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

    constructor(
        private router: Router,
        private companiesService: CompaniesService,
        private poNotification: PoNotificationService,
        private poDialogService: PoDialogService,
    ) {}

    refreshTable(): void {
        this.dataTableComponent.loadItems();
    }

    deleteCompany(item): void {
        this.poDialogService.confirm({
            title: 'Deletar Empresa',
            message: `Tem certeza que deseja excluir esta empresa?`,
            confirm: () =>
                this.companiesService.deleteUser(item.id).subscribe(() => {
                    this.refreshTable();
                    this.poNotification.success('Empresa deletada com Sucesso');
                }),
        });
    }
}
