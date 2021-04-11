import { NgModule } from '@angular/core';
import { ChargeFormComponent } from './charge-form/charge-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoModalModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { ChargeFormService } from './charge-form.service';
import { InvalidFeedbackModule } from '../invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [ChargeFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PoFieldModule,
        InvalidFeedbackModule,
        PoContainerModule,
        PoButtonModule,
        PoStepperModule,
        PoModalModule,
    ],
    providers: [ChargeFormService],
    exports: [ChargeFormComponent],
})
export class ChageFormModule {}
