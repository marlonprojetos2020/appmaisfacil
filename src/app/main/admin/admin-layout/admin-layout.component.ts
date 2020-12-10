import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CompanyDetailService } from '../companies/company-detail/company-detail.service';

@Component({
    templateUrl: 'admin-layout.component.html',
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

    private id = 100;

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

    readonly menuCompanyDetail: Array<PoMenuItem> = [
        {
            icon: 'po-icon-home',
            label: 'Painel de Controle',
            link: `admin/empresas/${this.id}`,
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: `/admin/empresas/${this.id}/cobrancas`,
        },
        {
            icon: 'po-icon-finance',
            label: 'Minhas Despesas',
            link: `/admin/empresas/${this.id}/pedidos`,
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Meus Extratos',
            link: `/admin/empresas/${this.id}/extrato`,
        },
        {
            icon: 'po-icon-database',
            label: 'Contabilidade',
            link: `/admin/empresas/${this.id}/contabilidade`,
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: `/admin/empresas/${this.id}/nota-fiscal`,
        },
        {
            icon: 'po-icon-company',
            label: 'Minha Empresa',
            link: `/admin/empresas/${this.id}/empresa`,
        },
        {
            icon: ' po-icon-handshake',
            label: 'Sócios',
            link: `/admin/empresas/${this.id}/socios`,
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: `/admin/empresas/${this.id}/funcionarios`,
        },
        {
            icon: 'po-icon-plus',
            label: 'Serviços',
            link: `/admin/empresas/${this.id}/servicos`,
        },
        {
            icon: 'po-icon-user-add',
            label: 'Indicações',
            link: `/admin/empresas/${this.id}/indicacoes`,
        },
        {
            icon: 'po-icon-help',
            label: 'F.A.Q.',
            link: `/admin/empresas/${this.id}/faq`,
        },
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
        private companyDetailService: CompanyDetailService,
    ) {}

    ngOnInit(): void {
        this.companyDetailService.getUserId().subscribe(
            id => {
                console.log(`Funfou id: ${id}`);
            },
            err => console.log(err),
        );
        setInterval(() => this.companyDetailService.getUserId, 1000);
    }

    ngOnDestroy(): void {
    }
}
