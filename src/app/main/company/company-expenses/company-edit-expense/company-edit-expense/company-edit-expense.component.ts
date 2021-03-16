import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './company-edit-expense.component.html',
})
export class CompanyEditExpenseComponent {

    expenseId = this.activatedRoute.snapshot.params.idDespesa;

    constructor(private activatedRoute: ActivatedRoute) {}
}
