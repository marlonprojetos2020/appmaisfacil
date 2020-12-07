import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
    templateUrl: './client-layout.component.html',
})
export class ClientLayoutComponent {

    pProfile: PoToolbarProfile;
    profileActions: Array<PoToolbarAction> = [
        {
            icon: 'po-icon-user',
            label: 'Minha Conta',
            url: '/cliente/perfil',
        },
        {
            icon: 'po-icon-lock',
            label: 'Meu Plano',
            url: '/cliente/meu-plano',
        },
        {
            icon: 'po-icon-lock',
            label: 'Alterar senha',
            url: '/cliente/alterar-senha',
        },
        {
            icon: 'po-icon-exit',
            label: 'Sair',
            type: 'danger',
            separator: true,
            action: () => {
                // this.authService.logout();
                this.router.navigateByUrl('/');
            },
        },
    ];

    readonly menus: Array<PoMenuItem> = [
        {
            icon: 'po-icon-home',
            label: 'Painel de Controle',
            link: '/cliente',
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: '/cliente/cobrancas',
        },
        {
            icon: 'po-icon-finance',
            label: 'Minhas Despesas',
            link: '/cliente/pedidos',
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Meus Extratos',
            link: '/cliente/extrato',
        },
        {
            icon: 'po-icon-database',
            label: 'Contabilidade',
            link: '/cliente/contabilidade',
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: '/cliente/nota-fiscal',
        },
        {
            icon: 'po-icon-company',
            label: 'Minha Empresa',
            link: '/cliente/empresa',
        },
        {
            icon: ' po-icon-handshake',
            label: 'Sócios',
            link: '/cliente/socios',
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: '/cliente/funcionarios',
        },
        {
            icon: 'po-icon-plus',
            label: 'Serviços',
            link: '/cliente/servicos',
        },
        {
            icon: 'po-icon-user-add',
            label: 'Indicações',
            link: '/cliente/indicacoes',
        },
        {
            icon: 'po-icon-help',
            label: 'F.A.Q.',
            link: '/cliente/faq',
        },
    ];

    constructor(
        private router: Router) {

    }
}
