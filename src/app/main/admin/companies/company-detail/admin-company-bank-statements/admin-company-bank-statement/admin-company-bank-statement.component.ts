import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { User } from '../../../model/user';
import { CompaniesService } from '../../../companies.service';

@Component({
    templateUrl: './admin-company-bank-statement.component.html',
})
export class AdminCompanyBankStatementComponent implements OnInit {
    pageActions: PoPageAction[] = [];
    serviceApi = '';
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'statusText',
        },
        {
            label: 'Banco',
            property: 'bankAccount.bankName',
        },
        {
            label: 'Mês de Referência',
            property: 'monthText',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService
    ) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.pageActions.push({
            label: 'Cadastrar Nova Conta',
            icon: 'po-icon-plus-circle',
            url: `/admin/empresa/${id}/extrato/nova-conta`,
        });

        this.serviceApi = `${environment.apiUrl}/statement/p/search?companyId=${id}`;

        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
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
            { label: 'Extratos' }
        );
    }
}
