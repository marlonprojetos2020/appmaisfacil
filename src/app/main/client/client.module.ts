import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { ClientDashboardModule } from './client-dashboard/client-dashboard.module';

@NgModule({
    declarations: [
        ClientLayoutComponent,
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        PoToolbarModule,
        PoMenuModule,
        ClientDashboardModule,
    ],
    exports: [],
    providers: [],
})
export class ClientModule { }
