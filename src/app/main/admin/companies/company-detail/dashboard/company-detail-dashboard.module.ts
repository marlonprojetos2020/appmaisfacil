import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PoButtonModule, PoContainerModule, PoPageModule} from '@po-ui/ng-components';
import { CompanyDetailDashboardComponent } from './dashboard/company-detail-dashboard.component';
import { DashboardAccordionModule } from 'src/app/shared/components/dashboard-accordion/dashboard-accordion.module';
import { PipeModule } from '../../../../../shared/pipe/pipe.module';

@NgModule({
    declarations: [CompanyDetailDashboardComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        DashboardAccordionModule,
        PipeModule,
        PoButtonModule,
    ],
    exports: [CompanyDetailDashboardComponent],
})
export class CompanyDetailDashboardModule {}
