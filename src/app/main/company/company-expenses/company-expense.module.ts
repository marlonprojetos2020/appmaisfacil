import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoModalModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { AtentionCardModule } from '../../../shared/components/atention-card/atention-card.module';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { CompanyNewExpenseModule } from './company-new-expense/company-new-expense.module';
import { CompanyEditExpenseModule } from './company-edit-expense/company-edit-expense.module';
import { CompanyExpensesRoutingModule } from './company-expenses-routing.module';
import { HelpPopoverModule } from '../../../shared/directives/help-popover/help-popover.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        AtentionCardModule,
        PoContainerModule,
        PageDatatableModule,
        CompanyExpensesRoutingModule,
        CompanyNewExpenseModule,
        CompanyEditExpenseModule,
        PoModalModule,
        PoButtonModule,
        HelpPopoverModule,
    ],
    declarations: [CompanyExpenseComponent],
})
export class CompanyExpenseModule {}
