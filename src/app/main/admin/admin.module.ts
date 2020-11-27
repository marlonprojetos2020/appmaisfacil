import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {DashboardPageAdminComponent} from './dashboard-page-admin/dashboard-page-admin.component';
import {PoMenuModule, PoPageModule, PoToolbarModule} from '@po-ui/ng-components';
import {LoadingBarModule} from '../../shared/component/loading-bar/loading-bar.module';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        DashboardPageAdminComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        PoPageModule,
        PoToolbarModule,
        PoMenuModule,
        LoadingBarModule,
    ],
})
export class AdminModule {
}
