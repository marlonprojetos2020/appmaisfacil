import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyNewBankAccountComponent } from './admin-company-new-bank-account/admin-company-new-bank-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoNotificationModule, PoPageModule } from '@po-ui/ng-components';
import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [
        AdminCompanyNewBankAccountComponent,
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
        AdminCompanyNewBankAccountComponent,
    ],
})
export class AdminCompanyNewBankAccountModule {}
