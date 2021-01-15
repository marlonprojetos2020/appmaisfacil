import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { AtentionCardModule } from '../../../shared/components/atention-card/atention-card.module';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { CompanyNewExpenseModule } from './company-new-expense/company-new-expense.module';
import { CompanyExpensesRoutingModule } from './company-expenses-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        AtentionCardModule,
        PoContainerModule,
        PageDatatableModule,
        CompanyExpensesRoutingModule,
        CompanyNewExpenseModule,
    ],
    declarations: [CompanyExpenseComponent],
})
export class CompanyExpenseModule {}
