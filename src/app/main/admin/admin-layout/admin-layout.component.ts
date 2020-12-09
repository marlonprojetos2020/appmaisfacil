import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    templateUrl: 'admin-layout.component.html',
})
export class AdminLayoutComponent {

    pProfile: PoToolbarProfile;
    profileActions: Array<PoToolbarAction> = [
        {
            icon: 'po-icon-user',
            label: 'Minha Conta',
            url: '/admin/perfil',
        },
        {
            icon: 'po-icon-lock',
            label: 'Alterar senha',
            url: '/admin/alterar-senha',
        },
        {
            icon: 'po-icon-desktop',
            label: 'Acessar como Empresa',
            url: '/empresa',
            visible: this.authService.isCompany(),
        },
        {
            icon: 'po-icon-exit',
            label: 'Sair',
            type: 'danger',
            separator: true,
            action: () => {
                this.authService.logout();
                this.router.navigateByUrl('/');
            },
        },
    ];

    readonly menus: Array<PoMenuItem> = [
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
            link: '/admin',
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Extratos',
            link: '/admin',
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: '/admin',
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: '/admin',
        },
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
    ) {}
}