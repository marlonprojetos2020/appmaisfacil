import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../companies.service';
import { User } from '../../model/user';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-edit.component.html',
})
export class CompanyEditComponent implements OnInit {
    company$: Observable<User> = null;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private companiesService: CompaniesService,
        private activetedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.company$ = this.companiesService.getUserCompany(
            this.activetedRoute.snapshot.params.id
        );

        this.companiesService
            .getUserCompanyBreadcrumb(this.activetedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadCrumb(data));
    }

    setBreadCrumb(user): void {
        user.items.map((item) =>
            this.breadcrumb.items.push(
                { label: 'Início', link: '/admin' },
                { label: 'Empresas', link: '/admin/empresas' },
                {
                    label: item.userCompany?.fantasyName
                        ? item.userCompany?.fantasyName
                        : item.name,
                    link: '',
                }
            )
        );
    }
}
