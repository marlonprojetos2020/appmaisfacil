import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-extra-service.component.html',
    styleUrls: ['./company-extra-service.component.scss'],
})
export class CompanyExtraServiceComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Serviços', link: '/empresa/servicos' },
        ],
    };

    constructor() {}

    ngOnInit(): void {}
}
