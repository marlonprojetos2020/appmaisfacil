import { Component } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';


@Component({
    templateUrl: 'company-new-expense.component.html',
})
export class CompanyNewExpenseComponent {

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Minhas Despesas', link: '/empresa/despesas' },
            { label: 'Nova Despesa', link: '' },
        ],
    };
}

