import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { AdminCompanyNewExpenseComponent } from './admin-company-new-expense/admin-company-new-expense.component';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoButtonModule,
        PoFieldModule,
    ],
    declarations: [AdminCompanyNewExpenseComponent],
})
export class AdminCompanyNewExpenseModule {}
