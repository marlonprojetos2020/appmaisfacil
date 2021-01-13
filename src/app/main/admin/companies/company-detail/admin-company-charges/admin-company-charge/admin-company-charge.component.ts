import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';

@Component({
    templateUrl: './admin-company-charge.component.html',
})
export class AdminCompanyChargeComponent implements OnInit {
    company$: Observable<User> = null;

    pageActions: PoPageAction[] = [];

    serviceApi = '';
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
        },
        {
            label: 'Titulo',
            property: 'description',
        },
        {
            label: 'Tipo',
            property: 'type.label',
        },
        {
            label: 'Vencimento',
            property: 'dueDate',
        },
        {
            label: 'Valor',
            property: 'value',
        },
    ];

    constructor(
        private router: Router,
        private activetedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this.activetedRoute.snapshot.params.id;

        this.pageActions.push({
            label: 'Nova Cobrança',
            icon: 'po-icon-plus-circle',
            url: `admin/empresa/${id}/cobrancas/nova-cobranca`,
        });

        this.serviceApi = `${environment.apiUrl}/billing`;

        this.tableActions.push({
            label: 'Editar',
            action: (item) =>
                this.router.navigateByUrl(
                    `admin/empresa/${id}/cobrancas/editar/${item.id}`
                ),
        });
    }
}
