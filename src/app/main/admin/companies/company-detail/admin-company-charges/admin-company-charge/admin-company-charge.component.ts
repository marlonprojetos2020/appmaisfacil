import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { AdminCompanyChargeService } from '../admin-company-charge.service';
import { CompaniesService } from '../../../companies.service';

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
                this.chargeService.canceledCharge(item.id).subscribe((data) => {
                    item.statusText = data.statusText;
                    this.poNotificationService.success(
                        'Cobrança cancelada com sucesso'
                    );
                }),
            disabled: (item) => item.status === 'CANCELED',
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
            property: 'statusText',
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
            type: 'date',
            format: 'dd/MM/yyyy',
        },
        {
            label: 'Valor',
            property: 'value',
            type: 'currency',
            format: 'BRL',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private router: Router,
        private activetedRoute: ActivatedRoute,
        private chargeService: AdminCompanyChargeService,
        private companiesService: CompaniesService,
        private poNotificationService: PoNotificationService
    ) {}

    ngOnInit(): void {
        const id = this.activetedRoute.snapshot.params.id;

        this.pageActions.push({
            label: 'Nova Cobrança',
            icon: 'po-icon-plus-circle',
            url: `admin/empresa/${id}/cobrancas/nova-cobranca`,
        });

        this.companiesService
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
            },
            { label: 'Cobranças' }
        );
    }
}
