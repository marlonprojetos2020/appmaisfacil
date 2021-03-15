import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
} from '@po-ui/ng-components';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { CompaniesService } from '../../../companies.service';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './admin-company-employee.component.html',
})
export class AdminCompanyEmployeeComponent implements OnInit {

    serviceApi = `${environment.apiUrl}/employee/p/search?search=&companyId=${this.activatedRoute.snapshot.params.id}`;
    pageActions: PoPageAction[] = [];
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
                label: user.userCompany?.fantasyName
                    ? user.userCompany?.fantasyName
                    : user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Funcionários' }
        );
    }
}
