import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyEditExpenseComponent } from './company-edit-expense/company-edit-expense.component';

@NgModule({
    declarations: [CompanyEditExpenseComponent],
    imports: [CommonModule],
    exports: [CompanyEditExpenseComponent],
})

export class CompanyEditExpenseModule {}