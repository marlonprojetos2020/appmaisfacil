import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { ClientDashboardComponent } from './client-dashboard.component';
import { HeadTextModule } from '../../../shared/components/head-text/head-text.module';
import { DashboardAccordionModule } from '../../../shared/components/dashboard-accordion/dashboard-accordion.module';

@NgModule({
    declarations: [ClientDashboardComponent],
    imports: [
        PoPageModule,
        CommonModule,
        HeadTextModule,
        DashboardAccordionModule,
    ],
    exports: [ClientDashboardComponent],
})
export class ClientDashboardModule {}
