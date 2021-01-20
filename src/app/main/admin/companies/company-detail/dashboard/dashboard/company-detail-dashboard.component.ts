import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../companies.service';
import { User } from '../../../model/user';

@Component({
    templateUrl: './company-detail-dashboard.component.html',
    styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailDashboardComponent implements OnInit {
    title = '';
    company$: Observable<User> = null;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    public readonly actions: Array<PoPageAction> = [
        {
            label: 'Editar Empresa',
            url: `admin/empresa/${this.activetedRoute.snapshot.params.id}/editar`,
        },
    ];

    constructor(
        private activetedRoute: ActivatedRoute,
        private companyDetailService: CompaniesService
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyDetailService.getUserCompany(
            this.activetedRoute.snapshot.params.id
        );

        this.companyDetailService
            .getUserCompany(this.activetedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.name,
                link: `/admin/empresa/${user.id}`,
            }
        );
    }
}
