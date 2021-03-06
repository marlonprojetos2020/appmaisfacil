import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { CompaniesService } from '../../companies/companies.service';
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
            label: 'Início',
            link: `.`,
        },
        {
            icon: 'po-icon-warning',
            label: 'Cobranças',
            link: `cobrancas`,
        },
        {
            icon: 'po-icon-finance',
            label: 'Despesas',
            link: `pedidos`,
        },
        {
            icon: 'po-icon po-icon-text-bold',
            label: 'Contas Bancárias',
            link: `contas-bancarias`,
        },
        {
            icon: 'po-icon-finance-secure',
            label: 'Extratos',
            link: `extrato`,
        },
        {
            icon: 'po-icon-document',
            label: 'Nota Fiscal',
            link: `nota-fiscal`,
        },
        {
            icon: 'po-icon-company',
            label: 'Empresa',
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
    ];

    constructor(
        private companyDetailService: CompaniesService,
        private acivatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.id = this.acivatedRoute.snapshot.params.id;
        this.companyDetailService.getUserCompany(this.id).subscribe((data) =>
            this.menuCompanyDetail.unshift({
                icon: 'po-icon-arrow-left',
                label: data.userCompany
                    ? data.userCompany.fantasyName
                    : data.name,
                link: `/admin/empresas`,
            })
        );
    }
}
