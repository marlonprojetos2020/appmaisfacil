import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-indication.component.html',
    styleUrls: ['company-indication.component.scss'],
})
export class CompanyIndicationComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Indicações', link: '/empresa/indicacoes' },
        ],
    };

    constructor() {}
    ngOnInit(): void {}
}
