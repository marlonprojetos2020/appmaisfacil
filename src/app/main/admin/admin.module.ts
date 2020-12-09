import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminDashboardComponent, AdminLayoutComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        PoMenuModule,
        PoToolbarModule,
    ],
})
export class AdminModule {}
