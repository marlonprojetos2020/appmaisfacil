import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../../companies.service';

@Component({
    templateUrl: './admin-company-associate.component.html',
})
export class AdminCompanyAssociateComponent implements OnInit {
    company$: Observable<User> = null;

    pageActions: PoPageAction[] = [
        {
            label: 'Adicionar Sócio',
            icon: 'po-icon-plus-circle',
            url: `/admin/empresa/${this.activetedRoute.snapshot.params.id}/socios/novo-socio`,
        },
    ];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) =>
                this.router.navigateByUrl(`/admin/empresa/${item.id}`),
        },
    ];
    columns: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'CPF',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Participação na Sociedade',
            property: 'name',
        },
    ];

    constructor(
        private router: Router,
        private activetedRoute: ActivatedRoute,
        private companyDetailService: CompaniesService
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyDetailService.getUserCompany(
            this.activetedRoute.snapshot.params.id
        );
    }
}
