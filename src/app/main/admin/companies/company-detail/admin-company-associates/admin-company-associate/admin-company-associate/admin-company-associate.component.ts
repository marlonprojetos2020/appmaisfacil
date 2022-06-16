import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../../shared/components/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../../../companies.service';
import { User } from '../../../../model/user';

@Component({
    templateUrl: './admin-company-associate.component.html',
})
export class AdminCompanyAssociateComponent implements OnInit {
    pageActions: PoPageAction[] = [];
    serviceApi = '';
    tableActions: PoTableAction[] = [
        {
            label: 'Editar',
            action: (item) => {
                this.router.navigate(['editar', item.id], {
                    relativeTo: this.activetedRoute,
                });
            },
        },
        {
            label: 'Baixar RG',
            action: (item) => window.open(item.rgUrl, '_blank'),
            disabled: (item) => !item.rgUrl,
        },
        {
            label: 'Baixar CPF',
            action: (item) => window.open(item.cpfUrl, '_blank'),
            disabled: (item) => !item.cpfUrl,
        },
        {
            label: 'Baixar Titulo de Eleitor',
            action: (item) => window.open(item.voterTitleUrl, '_blank'),
            disabled: (item) => !item.voterTitleUrl,
        },
        {
            label: 'Baixar Comprovante de Residência',
            action: (item) => window.open(item.proofOfAddressUrl, '_blank'),
            disabled: (item) => !item.proofOfAddressUrl,
        },
    ];
    columns: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'name',
        },
        {
            label: 'CPF',
            property: 'cpf',
        },
        {
            label: 'Participação na Sociedade (em %)',
            property: 'percentageInSociety',
        },
    ];
    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private router: Router,
        private activetedRoute: ActivatedRoute,
        private companiesService: CompaniesService
    ) {}

    ngOnInit(): void {
        const id = this.activetedRoute.snapshot.params.id;
        this.companiesService
            .getUserCompany(id)
            .subscribe((data) => this.setBreadcrumb(data));
        this.pageActions.push({
            label: 'Adicionar Sócio',
            icon: 'po-icon-plus-circle',
            url: `/admin/empresa/${id}/socios/novo-socio`,
        });
        this.serviceApi = `${environment.apiUrl}/users/${id}/company-partners`;
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.userCompany?.fantasyName
                    ? user.userCompany?.fantasyName
                    : user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Sócios' }
        );
    }
}
