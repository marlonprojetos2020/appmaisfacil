import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyExpenseComponent } from './admin-company-expense/admin-company-expense.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { AdminCompanyExpenseRoutingModule } from './admin-company-expense-routing.module';
import {
    PoButtonModule,
    PoContainerModule,
    PoModalModule,
} from '@po-ui/ng-components';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        AdminCompanyExpenseRoutingModule,
        PoModalModule,
        PoContainerModule,
        PoButtonModule,
    ],
    declarations: [AdminCompanyExpenseComponent],
})
export class AdminCompanyExpenseModule {}
