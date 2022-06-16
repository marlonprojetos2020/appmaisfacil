import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { CompaniesService } from '../../../companies.service';
import { User } from '../../../model/user';
@Component({
    templateUrl: './admin-company-charge.component.html',
})
export class AdminCompanyChargeComponent implements OnInit {

    id = this.activetedRoute.snapshot.params.id;
    serviceApi = `${environment.apiUrl}/billing/p/search?companyId=${this.id}`;
    breadcrumb: PoBreadcrumb = null;

    pageActions = [
        {
            label: 'Nova Cobrança',
            icon: 'po-icon-plus-circle',
            url: `admin/empresa/${this.id}/cobrancas/nova-cobranca`,
        }
    ];

    constructor(
        private activetedRoute: ActivatedRoute,
        private companiesService: CompaniesService) {}

    ngOnInit(): void {
        this.companiesService
            .getUserCompany(this.activetedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb = {
            items: [
                { label: 'Inicio', link: '/admin' },
                { label: 'Empresas', link: '/admin/empresas' },
                {
                    label: user.userCompany?.fantasyName
                        ? user.userCompany?.fantasyName
                        : user.name,
                    link: `/admin/empresa/${user.id}`,
                },
                { label: 'Cobranças' },
            ],
        };
    }
}
