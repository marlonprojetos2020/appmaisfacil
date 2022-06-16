import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';

import { CompanyExpenseService } from '../../company-expense.service';

@Component({
    templateUrl: './company-edit-expense.component.html',
})
export class CompanyEditExpenseComponent {

    idEditedExpense = this.activatedRoute.snapshot.params.id;
    editedExpense = this.companyExpenseService.findExpense(this.idEditedExpense);

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Minhas Despesas', link: '/empresa/despesas' },
            { label: 'Editar Despesa', link: '' },
        ],
    };

    constructor(
        private companyExpenseService: CompanyExpenseService,
        private activatedRoute: ActivatedRoute,
    ) {}
}
