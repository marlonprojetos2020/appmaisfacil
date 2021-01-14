import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoNotificationModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { AssociateFormComponent } from './associate-form/associate-form.component';
import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';


@NgModule({
    declarations: [AssociateFormComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule,
        PoNotificationModule,
        PoStepperModule,
        InvalidFeedbackModule,
    ],
    exports: [AssociateFormComponent],
})
export class AssociateFormModule {}