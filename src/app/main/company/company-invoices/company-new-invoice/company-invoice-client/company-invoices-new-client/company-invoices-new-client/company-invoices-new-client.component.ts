import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: 'company-invoices-new-client.component.html',
})
export class CompanyInvoicesNewClientComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
            { label: 'Emitir Nota', link: '/empresa/nota-fiscal/emitir-nota' },
            {
                label: 'Novo Cliente',
                link: '/empresa/nota-fiscal/emitir-nota/novo-cliente',
            },
        ],
    };

    constructor() {}
    ngOnInit(): void {}
}
