import { Component } from '@angular/core';
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
export class CompanyAssociateComponent {
    pageActions: PoPageAction[] = [];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Sócios', link: '/empresa/socios' },
        ],
    };

    serviceApi = `${environment.apiUrl}/users/p/search`;

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
}
