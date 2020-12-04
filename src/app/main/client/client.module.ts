import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { ClientDashboardModule } from './client-dashboard/client-dashboard.module';
import { NeedHelpComponent } from './client-layout//need-help/need-help.component';

@NgModule({
    declarations: [ClientLayoutComponent, NeedHelpComponent],
    imports: [
        CommonModule,
        ClientRoutingModule,
        PoToolbarModule,
        PoMenuModule,
        ClientDashboardModule,
    ],
    exports: [NeedHelpComponent],
    providers: [],
})
export class ClientModule {}
