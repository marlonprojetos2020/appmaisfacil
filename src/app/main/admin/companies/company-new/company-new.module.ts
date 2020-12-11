import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { PoStepperModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { CompanyNewComponent } from './company-new/company-new.component';
import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [CompanyNewComponent],
    imports: [
        CommonModule,
        PoPageModule,
        ReactiveFormsModule,
        PoContainerModule,
        PoStepperModule,
        PoFieldModule,
        PoButtonModule,
        InvalidFeedbackModule,
    ],
    exports: [CompanyNewComponent],
})

export class CompanyNewModule {}
