import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyNewBankComponent } from './admin-company-new-bank/admin-company-new-bank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoNotificationModule, PoPageModule } from '@po-ui/ng-components';
import { InvalidFeedbackModule } from 'src/app/shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [
        AdminCompanyNewBankComponent,
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
        AdminCompanyNewBankComponent,
    ],
})
export class AdminCompanyNewBankModule {}
