import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PoContainerModule, PoFieldModule, PoLoadingModule, PoPageModule } from '@po-ui/ng-components';
import { PoStepperModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { CompanyFormComponent } from './company-form/company-form.component';
import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [CompanyFormComponent],
    imports: [
        CommonModule,
        PoPageModule,
        ReactiveFormsModule,
        PoContainerModule,
        PoStepperModule,
        PoFieldModule,
        PoButtonModule,
        InvalidFeedbackModule,
        PoLoadingModule,
    ],
    exports: [CompanyFormComponent],

})
export class CompanyFormModule {}
