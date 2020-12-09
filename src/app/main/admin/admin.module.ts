import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [DashboardComponent, AdminLayoutComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        PoMenuModule,
        PoToolbarModule,
    ],
})
export class AdminModule {}
