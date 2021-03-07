import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { PageDatatableComponent } from '../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    templateUrl: './company-bank-account.component.html',
})
export class CompanyBankAccountComponent implements OnInit {

    id: string = '';
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Inicio', link: '/empresa' },
            { label: 'Contas Bancárias', link: `` },
        ],
    };
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'enabled',
        },
        {
            label: 'Tipo de Conta',
            property: 'accountType',
        },
        {
            label: 'Status',
            property: 'bankName',
        },
        {
            label: 'Agência',
            property: 'agency',
        },
    ];
    pageActions: PoPageAction[] = [];
    serviceApi = `${environment.apiUrl}/company/bank-account`;

    constructor() {}

    ngOnInit(): void {
    }

}
