import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBankAccountFormComponent } from './admin-bank-account-form/admin-bank-account-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoNotificationModule, PoPageModule } from '@po-ui/ng-components';
import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [
        AdminBankAccountFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        InvalidFeedbackModule,
        PoNotificationModule,
    ],
    exports: [
        AdminBankAccountFormComponent,
    ],
})
export class AdminBankAccountFormModule {}
