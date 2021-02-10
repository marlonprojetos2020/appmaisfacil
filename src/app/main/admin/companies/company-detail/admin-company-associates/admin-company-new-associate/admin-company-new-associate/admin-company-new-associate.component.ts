import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../../../companies.service';
import { User } from '../../../../model/user';

@Component({
    templateUrl: 'admin-company-new-associate.component.html',
    styleUrls: ['admin-company-new-associate.component.scss'],
})
export class AdminCompanyNewAssociateComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService
    ) {}

    ngOnInit(): void {
        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Sócios', link: `/admin/empresa/${user.id}/socios` },
            { label: 'Novo Sócio' }
        );
    }
}
