import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyEditEmployeeComponent } from './company-edit-employee/company-edit-employee.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { InvalidFeedbackModule } from '../../../../shared/components/invalid-feedback/invalid-feedback.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormModule } from '../../../../shared/components/employee-form/employee-form.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoFieldModule,
        InvalidFeedbackModule,
        ReactiveFormsModule,
        PoButtonModule,
        PoStepperModule,
        PoContainerModule,
        EmployeeFormModule,
    ],
    declarations: [CompanyEditEmployeeComponent],
})
export class CompanyEditEmployeeModule {}
