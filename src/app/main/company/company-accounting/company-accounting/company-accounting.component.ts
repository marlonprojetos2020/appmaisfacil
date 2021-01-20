import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-accounting.component.html',
})
export class CompanyAccountingComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Contabilidade', link: '/empresa/contabilidade' },
        ],
    };

    constructor() {}
    ngOnInit(): void {}
}
