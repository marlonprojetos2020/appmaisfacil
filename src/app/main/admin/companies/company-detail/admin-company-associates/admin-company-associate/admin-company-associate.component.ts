import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { PercentPipe } from '@angular/common';

@Component({
    templateUrl: './admin-company-associate.component.html',
})
export class AdminCompanyAssociateComponent implements OnInit {
    company$: Observable<User> = null;

    pageActions: PoPageAction[] = [];
    serviceApi = '';
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

    constructor(
        private router: Router,
        private activetedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        const id = this.activetedRoute.snapshot.params.id;
        this.pageActions.push(
            {
                label: 'Adicionar Sócio',
                icon: 'po-icon-plus-circle',
                url: `/admin/empresa/${id}/socios/novo-socio`,
            },
        );
        this.serviceApi = `${environment.apiUrl}/users/${id}/company-partners`;
    }
}
