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
    serviceApi = `${environment.apiUrl}/company/partners`;
    idCompany: number;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Sócios', link: '/empresa/socios' },
        ],
    };

    tableActions: PoTableAction[] = [];
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
            label: 'Participação na Sociedade',
            property: 'percentageInSociety',
        },
    ];

    constructor() {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.idCompany = company.userDetails.id;
    }
}
