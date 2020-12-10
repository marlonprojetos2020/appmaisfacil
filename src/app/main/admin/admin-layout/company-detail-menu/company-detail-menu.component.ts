import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PoMenuItem } from '@po-ui/ng-components';
// import { CompanyDetailService } from '../../comp';


@Component({
    templateUrl: './company-detail-menu.component.html',
})
export class CompanyDetailMenuComponent implements OnInit, OnDestroy {

    id = null;
    subscription: Subscription;

    readonly menuCompanyDetail: Array<PoMenuItem> = [
        {
            icon: 'po-icon-home',
            label: 'Painel de Controle',
            link: `admin/empresa/${this.id}`,
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: `/admin/empresa/${this.id}/cobrancas`,
        },
        {
            icon: 'po-icon-finance',
            label: 'Minhas Despesas',
            link: `/admin/empresa/${this.id}/pedidos`,
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Meus Extratos',
            link: `/admin/empresa/${this.id}/extrato`,
        },
        {
            icon: 'po-icon-database',
            label: 'Contabilidade',
            link: `/admin/empresa/${this.id}/contabilidade`,
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: `/admin/empresa/${this.id}/nota-fiscal`,
        },
        {
            icon: 'po-icon-company',
            label: 'Minha Empresa',
            link: `/admin/empresa/${this.id}/empresa`,
        },
        {
            icon: ' po-icon-handshake',
            label: 'Sócios',
            link: `/admin/empresa/${this.id}/socios`,
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: `/admin/empresa/${this.id}/funcionarios`,
        },
        {
            icon: 'po-icon-plus',
            label: 'Serviços',
            link: `/admin/empresa/${this.id}/servicos`,
        },
        {
            icon: 'po-icon-user-add',
            label: 'Indicações',
            link: `/admin/empresa/${this.id}/indicacoes`,
        },
        {
            icon: 'po-icon-help',
            label: 'F.A.Q.',
            link: `/admin/empresa/${this.id}/faq`,
        },
    ];

    constructor(
        // private companyDetailService: CompanyDetailService
    ) {}

    ngOnInit(): void {
        // this.subscription = this.companyDetailService.getUserId().subscribe(id => this.id = id);
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
    }
}
