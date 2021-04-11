import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './company-new-bank-account.component.html',
})
export class CompanyNewBankAccountComponent {
    id: string = '';
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Inicio', link: '/' },
            { label: 'Contas Bancárias', link: `/empresa/contas-bancarias` },
            { label: 'Nova Conta' }
        ],
    };

    constructor(
    ) {}
}
