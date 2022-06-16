import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';


@Component({
    templateUrl: './admin-menu.component.html',
})
export class AdminMenuComponent {

    readonly menuAdmin: Array<PoMenuItem> = [
        {
            icon: 'po-icon-home',
            label: 'Painel de Controle',
            link: '/admin',
        },
        {
            icon: 'po-icon-company',
            label: 'Empresas',
            link: '/admin/empresas',
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: '/admin/cobrancas',
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Extratos',
            link: '/admin/extratos',
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: '/admin/nota-fiscal',
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: '/admin/funcionarios',
        },
    ];

    constructor() {}

}
