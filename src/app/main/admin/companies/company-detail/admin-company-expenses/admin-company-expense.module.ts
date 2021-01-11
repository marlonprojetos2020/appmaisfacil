import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyExpenseComponent } from './admin-company-expense/admin-company-expense.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { AdminCompanyNewExpenseModule } from './admin-company-new-expense/admin-company-new-expense.module';
import { AdminCompanyExpenseRoutingModule } from './admin-company-expense-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        AdminCompanyNewExpenseModule,
        AdminCompanyExpenseRoutingModule,
    ],
    declarations: [AdminCompanyExpenseComponent],
})
export class AdminCompanyExpenseModule {}
