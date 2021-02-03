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
import { InvalidFeedbackModule } from '../../../../shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        ReactiveFormsModule,
        PoStepperModule,
        PoFieldModule,
        PoButtonModule,
        InvalidFeedbackModule,
    ],
    declarations: [CompanyNewExpenseComponent],
})
export class CompanyNewExpenseModule {}
