import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';

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
            property: 'userCompany.fantasyName',
        },
        {
            label: 'Banco',
            property: 'userCompany.cnpj',
        },
        {
            label: 'Mês de Referência',
            property: 'name',
        },
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.pageActions.push(
            {
                label: 'Cadastrar Nova Conta',
                icon: 'po-icon-plus-circle',
                url: `/admin/empresa/${id}/extrato/nova-conta`,
            },
        );
        this.serviceApi = `${environment.apiUrl}/users/${id}/bank-accounts`;
    }
}
