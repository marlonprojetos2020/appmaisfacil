import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';
import { CompanyExpenseFormComponent } from './company-expense-form/company-expense-form.component';

@NgModule({
    declarations: [CompanyExpenseFormComponent],
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
    exports: [CompanyExpenseFormComponent]

})
export class CompanyExpenseFormModule {}

