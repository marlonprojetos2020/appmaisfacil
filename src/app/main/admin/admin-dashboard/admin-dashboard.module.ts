import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {DashboardAccordionModule} from '../../../shared/components/dashboard-accordion/dashboard-accordion.module';

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [
        CommonModule,
        PoPageModule,
        DashboardAccordionModule,
    ],
    exports: [AdminDashboardComponent],
})
export class AdminDashboardModule {}
