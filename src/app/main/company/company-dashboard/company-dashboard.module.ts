import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { HeadTextModule } from '../../../shared/components/head-text/head-text.module';
import { DisclaimerModule } from '../../../shared/components/disclaimer/disclaimer.module';
import { DashboardAccordionModule } from '../../../shared/components/dashboard-accordion/dashboard-accordion.module';
import { HelpPopoverModule } from '../../../shared/directives/help-popover/help-popover.module';

@NgModule({
    declarations: [CompanyDashboardComponent],
    imports: [
        PoPageModule,
        CommonModule,
        HeadTextModule,
        DashboardAccordionModule,
        DisclaimerModule,
        HelpPopoverModule,
    ],
    exports: [CompanyDashboardComponent],
})
export class CompanyDashboardModule {}
