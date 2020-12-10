import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { CompanyDetailService } from '../../company-detail/company-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './company-detail-menu.component.html',
    styleUrls: ['./company-detail-menu.component.scss'],
})
export class CompanyDetailMenuComponent implements OnInit {
    id = null;

    menuCompanyDetail: Array<PoMenuItem> = [
        {
            icon: 'po-icon-home',
            label: 'Painel de Controle',
            // link: `admin/empresa/${this.id}`,
            link: ``,
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: `cobrancas`,
        },
        {
            icon: 'po-icon-finance',
            label: 'Minhas Despesas',
            link: `pedidos`,
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Meus Extratos',
            link: `extrato`,
        },
        {
            icon: 'po-icon-database',
            label: 'Contabilidade',
            link: `contabilidade`,
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: `nota-fiscal`,
        },
        {
            icon: 'po-icon-company',
            label: 'Minha Empresa',
            link: `empresa`,
        },
        {
            icon: ' po-icon-handshake',
            label: 'Sócios',
            link: `socios`,
        },
        {
            icon: 'po-icon-users',
            label: 'Funcionários',
            link: `funcionarios`,
        },
        {
            icon: 'po-icon-plus',
            label: 'Serviços',
            link: `servicos`,
        },
        {
            icon: 'po-icon-user-add',
            label: 'Indicações',
            link: `indicacoes`,
        },
        {
            icon: 'po-icon-help',
            label: 'F.A.Q.',
            link: `faq`,
        },
    ];

    constructor(
        private companyDetailService: CompanyDetailService,
        private acivatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.id = this.acivatedRoute.snapshot.params.id;
        this.companyDetailService.getUserCompany(this.id).subscribe((data) =>
            this.menuCompanyDetail.unshift({
                icon: 'po-icon-arrow-left',
                label: data.name,
                link: `/admin/empresas`,
            })
        );
    }
}
