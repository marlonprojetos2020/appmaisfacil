import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: 'company-invoice-edit-client.component.html',
})
export class CompanyInvoiceEditClientComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
            { label: 'Emitir Nota', link: '/empresa/nota-fiscal/emitir-nota' },
            {
                label: 'Editar Cliente',
                link: '',
            },
        ],
    };

    constructor() {}

    ngOnInit(): void {}
}
