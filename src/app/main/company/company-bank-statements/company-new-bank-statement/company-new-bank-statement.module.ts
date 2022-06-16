import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewBankStatementComponent } from './company-new-bank-statement/company-new-bank-statement.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpPopoverModule } from '../../../../shared/directives/help-popover/help-popover.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoStepperModule,
        PoContainerModule,
        ReactiveFormsModule,
        PoFieldModule,
        PoButtonModule,
        HelpPopoverModule,
    ],
    declarations: [CompanyNewBankStatementComponent],
})
export class CompanyNewBankStatementModule {}
