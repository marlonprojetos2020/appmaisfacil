import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../../../companies.service';

@Component({
    templateUrl: 'admin-company-expense.component.html',
})
export class AdminCompanyExpenseComponent implements OnInit {
    company$: Observable<User> = null;

    pageActions: PoPageAction[] = [
        {
            label: 'Solicitar Despesa',
            icon: 'po-icon-plus-circle',
            url: `/admin/empresa/${this.activetedRoute.snapshot.params.id}/pedidos/novo-pedido`,
        },
    ];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'Titulo',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Tipo',
            property: 'name',
        },
        {
            label: 'Vencimento',
            property: 'name',
        },
        {
            label: 'Valor',
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
