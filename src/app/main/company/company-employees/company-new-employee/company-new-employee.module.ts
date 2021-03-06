import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoBreadcrumbModule,
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { CompanyNewEmployeeComponent } from './company-new-employee/company-new-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackModule } from '../../../../shared/components/invalid-feedback/invalid-feedback.module';
import { EmployeeFormModule } from '../../../../shared/components/employee-form/employee-form.module';

@NgModule({
    declarations: [CompanyNewEmployeeComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        PoStepperModule,
        ReactiveFormsModule,
        InvalidFeedbackModule,
        PoBreadcrumbModule,
        EmployeeFormModule,
    ],
})
export class CompanyNewEmployeeModule {}
