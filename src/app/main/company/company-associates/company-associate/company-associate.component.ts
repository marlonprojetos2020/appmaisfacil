import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: './company-associate.component.html',
})
export class CompanyAssociateComponent implements OnInit {

    pageActions: PoPageAction[] = [];

    idCompany: number;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Sócios', link: '/empresa/socios' },
        ],
    };

    serviceApi = '';
    tableActions: PoTableAction[] = [];
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
        },
    ];

    constructor() {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.idCompany = company.userDetails.id;

        // this.serviceApi = `${environment.apiUrl}/users/${this.idCompany}/company-partners`;
        this.serviceApi = `${environment.apiUrl}/company/partners`;
    }
}
