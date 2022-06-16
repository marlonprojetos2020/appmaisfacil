import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-new.component.html',
})
export class CompanyNewComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: 'Nova Empresa',
                link: '',
            },
        ],
    };

    constructor() {}

    ngOnInit(): void {}
}
