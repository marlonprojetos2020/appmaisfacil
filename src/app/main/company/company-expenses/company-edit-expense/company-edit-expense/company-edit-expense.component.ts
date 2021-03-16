import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyExpenseService } from '../../company-expense.service';

@Component({
    templateUrl: './company-edit-expense.component.html',
})
export class CompanyEditExpenseComponent {

    idEditedExpense = this.activatedRoute.snapshot.params.id;
    editedExpense = this.companyExpenseService.findExpense(this.idEditedExpense);

    constructor(
        private companyExpenseService: CompanyExpenseService,
        private activatedRoute: ActivatedRoute,
    ) {}
}
