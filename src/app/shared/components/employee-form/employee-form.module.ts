import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackModule } from '../invalid-feedback/invalid-feedback.module';

@NgModule({
    imports: [
        CommonModule,
        PoStepperModule,
        ReactiveFormsModule,
        PoFieldModule,
        InvalidFeedbackModule,
        PoButtonModule,
        PoContainerModule,
    ],
    declarations: [EmployeeFormComponent],
    exports: [EmployeeFormComponent],
})
export class EmployeeFormModule {}
