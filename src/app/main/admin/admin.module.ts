import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDashboardModule } from './dashboard/admin-dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminToolbarComponent } from './admin-layout/admin-toolbar/admin-toolbar.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { CompanyDetailMenuComponent } from './admin-layout/company-detail-menu/company-detail-menu.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { AdminMyAccountModule } from './admin-my-account/admin-my-account.module';

@NgModule({
    declarations: [AdminToolbarComponent, AdminMenuComponent, CompanyDetailMenuComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        PoMenuModule,
        PoToolbarModule,
        AdminDashboardModule,
        AdminMyAccountModule,
    ],
    exports: [AdminToolbarComponent, AdminMenuComponent, CompanyDetailMenuComponent],
})
export class AdminModule {}
