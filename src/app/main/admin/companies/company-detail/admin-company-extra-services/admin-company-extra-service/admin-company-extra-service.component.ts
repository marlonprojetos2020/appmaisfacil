import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { CompaniesService } from '../../../companies.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';

@Component({
    templateUrl: 'admin-company-extra-service.component.html',
    styleUrls: ['admin-company-extra-service.component.scss'],
})
export class AdminCompanyExtraServiceComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private companiesService: CompaniesService,
        private activatedRoute: ActivatedRoute
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
            { label: 'Serviços' }
        );
    }
}
