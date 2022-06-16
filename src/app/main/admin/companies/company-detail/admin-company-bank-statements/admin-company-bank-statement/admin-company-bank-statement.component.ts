import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';

import { environment } from 'src/environments/environment';
import { CompaniesService } from '../../../companies.service';
import { User } from '../../../model/user';

@Component({
    templateUrl: './admin-company-bank-statement.component.html',
})
export class AdminCompanyBankStatementComponent implements OnInit {

    userId = this.activatedRoute.snapshot.params.id;
    serviceApi = `${environment.apiUrl}/statement/p/search?companyId=${this.userId}`;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService,
    ) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.companiesService.getUserCompany(this.userId)
            .subscribe(data => this.setBreadcrumb(data));
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
            { label: 'Extratos' },
        );
    }
}
