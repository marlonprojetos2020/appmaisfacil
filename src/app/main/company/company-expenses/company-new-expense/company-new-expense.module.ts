import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyNewExpenseComponent } from './company-new-expense/company-new-expense.component';
import { CompanyExpenseFormModule } from '../shared/company-expense-form/company-expense-form.module';

@NgModule({
    declarations: [CompanyNewExpenseComponent],
    imports: [
        CommonModule,
        CompanyExpenseFormModule,
    ],
})
export class CompanyNewExpenseModule {}
