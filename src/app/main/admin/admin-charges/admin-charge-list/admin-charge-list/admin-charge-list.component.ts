import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { DatatableColumn } from 'src/app/shared/components/page-datatable/page-datatable/datatable-column';
import { environment } from 'src/environments/environment';
import { User } from '../../../companies/model/user';

@Component({
    templateUrl: './admin-charge-list.component.html',
})
export class AdminChargeListComponent {

    @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
    title = '';

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
        {
            label: 'Abrir Modal',
            action: (item) => {
                this.prepareModal(item);
                this.poModal.open();
            },
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

    close: PoModalAction = {
        action: () => {
            console.log('cancelar');
        },
        label: 'Close',
        danger: true,
    };

    confirm: PoModalAction = {
        action: () => {
            console.log('confirmou');
        },
        label: 'Confirm',
    };

    constructor(private router: Router) {}

    prepareModal(company: User): void {
        this.title = company.name;
    }
}
