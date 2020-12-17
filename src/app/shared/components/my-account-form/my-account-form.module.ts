import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';
import { MyAccountFormComponent } from './my-account-form/my-account-form.component';
import { MyAccountFormService } from './my-account-form.service';
import { InvalidFeedbackModule } from '../invalid-feedback/invalid-feedback.module';
import { PoNotificationModule } from '@po-ui/ng-components';



@NgModule({
    declarations: [MyAccountFormComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        ReactiveFormsModule,
        PoFieldModule,
        InvalidFeedbackModule,
        PoButtonModule,
        PoNotificationModule,
    ],
    exports: [MyAccountFormComponent],
    providers: [MyAccountFormService],
})
export class MyAccountFormModule {}
