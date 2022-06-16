import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyEditExpenseComponent } from './company-edit-expense/company-edit-expense.component';
import { CompanyExpenseFormModule } from '../shared/company-expense-form/company-expense-form.module';

@NgModule({
    declarations: [CompanyEditExpenseComponent],
    imports: [
        CommonModule,
        CompanyExpenseFormModule,
    ],
})

export class CompanyEditExpenseModule {}