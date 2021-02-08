import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    PoMenuItem,
    PoToolbarAction,
    PoToolbarProfile,
} from '@po-ui/ng-components';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    templateUrl: './company-layout.component.html',
})
export class CompanyLayoutComponent {
    pProfile: PoToolbarProfile;
    profileActions: Array<PoToolbarAction> = [
        {
            icon: 'po-icon-user',
            label: 'Minha Conta',
            url: 'empresa/minha-conta',
        },
        {
            icon: 'po-icon-lock',
            label: 'Meu Plano',
            url: '/empresa/meu-plano',
        },
        {
            icon: 'po-icon-lock',
            label: 'Alterar senha',
            url: '/alterar-senha',
        },
        {
            icon: 'po-icon-device-desktop',
            label: 'Acessar como Admin',
            url: '/admin',
            visible: this.authService.isAdmin(),
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
            link: '/empresa',
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: '/empresa/cobrancas',
        },
        {
            icon: 'po-icon-finance',
            label: 'Minhas Despesas',
            link: '/empresa/despesas',
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Meus Extratos',
            link: '/empresa/extrato',
        },
        {
            icon: 'po-icon-database',
            label: 'Contabilidade',
            link: '/empresa/contabilidade',
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: '/empresa/nota-fiscal',
        },
        {
            icon: 'po-icon-company',
            label: 'Minha Empresa',
            link: '/empresa/minha-empresa',
        },
        {
            icon: ' po-icon-handshake',
            label: 'Sócios',
            link: '/empresa/socios',
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: '/empresa/funcionarios',
        },
        {
            icon: 'po-icon-plus',
            label: 'Serviços',
            link: '/empresa/servicos',
        },
        {
            icon: 'po-icon-user-add',
            label: 'Indicações',
            link: '/empresa/indicacoes',
        },
        {
            icon: 'po-icon-help',
            label: 'F.A.Q.',
            link: '/empresa/faq',
        },
    ];

    constructor(private authService: AuthService, private router: Router) {}
}
