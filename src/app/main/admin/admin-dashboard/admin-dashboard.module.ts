import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardAccordionModule } from '../../../shared/components/dashboard-accordion/dashboard-accordion.module';
import { CardDashboardModule } from './shared/components/card-dashboard/card-dashboard.module';

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [
        CommonModule,
        PoPageModule,
        DashboardAccordionModule,
        CardDashboardModule,
    ],
    exports: [AdminDashboardComponent],
})
export class AdminDashboardModule {}
