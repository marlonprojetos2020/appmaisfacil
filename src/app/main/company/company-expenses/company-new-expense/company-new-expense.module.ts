import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewExpenseComponent } from './company-new-expense/company-new-expense.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        ReactiveFormsModule,
        PoStepperModule,
        PoFieldModule,
        PoButtonModule,
    ],
    declarations: [CompanyNewExpenseComponent],
})
export class CompanyNewExpenseModule {}
