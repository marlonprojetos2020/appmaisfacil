import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-faq.component.html',
})
export class CompanyFaqComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'F.A.Q.', link: '/empresa/faq' },
        ],
    };

    constructor() {}

    ngOnInit(): void {}
}
