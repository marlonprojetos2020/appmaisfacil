import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { CompaniesService } from '../../../companies.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';

@Component({
    templateUrl: './admin-company-invoice.component.html',
})
export class AdminCompanyInvoiceComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/nota-fiscal/p/search`;
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Valor',
            property: 'totalAmount',
            type: 'currency',
            format: 'BRL',
        },
        {
            label: 'Emissão',
            property: 'emissionAt',
            type: 'date',
            format: 'dd/MM/yyyy',
        },
    ];

    constructor(
        private companiesService: CompaniesService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.userCompany.fantasyName,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Nota Fiscal' }
        );
    }
}
