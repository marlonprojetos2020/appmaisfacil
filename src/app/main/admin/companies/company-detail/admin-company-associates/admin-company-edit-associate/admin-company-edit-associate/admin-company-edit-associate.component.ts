import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminCompanyEditAssociateService } from '../admin-company-edit-associate.service';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { User } from '../../../../model/user';
import { CompaniesService } from '../../../../companies.service';

@Component({
    templateUrl: 'admin-company-edit-associate.component.html',
})
export class AdminCompanyEditAssociateComponent implements OnInit {
    associate$: Observable<any> = null;

    nameAssociate: string;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activetedRoute: ActivatedRoute,
        private adminCompanyEditAssociateService: AdminCompanyEditAssociateService,
        private companiesService: CompaniesService
    ) {}

    ngOnInit(): void {
        const idAssociate = this.activetedRoute.snapshot.params.idAssociate;
        const idCompany = this.activetedRoute.snapshot.params.id;
        this.associate$ = this.adminCompanyEditAssociateService.getAssociate(
            idCompany,
            idAssociate
        );

        this.adminCompanyEditAssociateService
            .getAssociate(idCompany, idAssociate)
            .subscribe((data) => (this.nameAssociate = data.name));

        const id = this.activetedRoute.snapshot.params.id;
        this.companiesService
            .getUserCompany(id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            { label: user.name, link: `/admin/empresa/${user.id}` },
            { label: 'Sócios', link: `/admin/empresa/${user.id}/socios` },
            { label: this.nameAssociate }
        );
    }
}
