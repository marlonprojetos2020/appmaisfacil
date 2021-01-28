import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'company-new-invoice.component.html',
    styleUrls: ['company-new-invoice.component.scss'],
})
export class CompanyNewInvoiceComponent implements OnInit {
    pageActions: PoPageAction[] = [
        {
            label: 'Novo Cliente',
            icon: 'po-icon-plus',
            url: '/empresa/nota-fiscal/emitir-nota/novo-cliente',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
            { label: 'Emitir Nota', link: '/empresa/nota-fiscal/emitir-nota' },
        ],
    };

    serviceApi = `${environment.apiUrl}/company/client/p/search?search=`;

    tableActions: PoTableAction[] = [
        {
            label: 'Editar',
            action: () => console.log('editar'),
        },
        {
            label: 'Visualizar',
            action: () => console.log('visto'),
        },
        {
            label: 'Selecionar',
            action: (item) =>
                this.router.navigateByUrl(
                    `/empresa/nota-fiscal/emitir-nota/nova-nota/${item.id}`
                ),
        },
    ];

    columns: DatatableColumn[] = [
        {
            label: 'Name',
            property: 'name',
        },
        {
            label: 'CNPJ/CPF',
            property: 'document',
        },
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {}
}
