import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDashboardModule } from './dashboard/admin-dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminLayoutComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        PoMenuModule,
        PoToolbarModule,
        AdminDashboardModule,
    ],
    exports: [AdminLayoutComponent],
})
export class AdminModule {}
