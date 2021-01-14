import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { AdminCompanyChargeService } from '../admin-company-charge.service';

@Component({
    templateUrl: './admin-company-charge.component.html',
})
export class AdminCompanyChargeComponent implements OnInit {
    company$: Observable<User> = null;

    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/billing`;
    tableActions: PoTableAction[] = [
        {
            label: 'Cancelar',
            action: (item) =>
                this.chargeService
                    .canceledCharge(item.id)
                    .subscribe((data) => (item.status = data.status)),
        },
        {
            label: 'Baixar Cobraça',
            action: (item) => window.open(item.billingFileUrl, '_blank'),
            disabled: (item) => !item.billingFileUrl,
        },
    ];
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
        private activetedRoute: ActivatedRoute,
        private chargeService: AdminCompanyChargeService
    ) {}

    ngOnInit(): void {
        const id = this.activetedRoute.snapshot.params.id;

        this.pageActions.push({
            label: 'Nova Cobrança',
            icon: 'po-icon-plus-circle',
            url: `admin/empresa/${id}/cobrancas/nova-cobranca`,
        });
    }
}
