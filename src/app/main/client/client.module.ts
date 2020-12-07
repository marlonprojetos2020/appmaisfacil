import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { ClientDashboardModule } from './client-dashboard/client-dashboard.module';
import { NeedHelpComponent } from './client-layout//need-help/need-help.component';
import { ChargesModule } from './charges/charges.module';

@NgModule({
    declarations: [ClientLayoutComponent, NeedHelpComponent],
    imports: [
        CommonModule,
        ClientRoutingModule,
        PoToolbarModule,
        PoMenuModule,
        ClientDashboardModule,
        ChargesModule,
    ],
    exports: [],
    providers: [],
})
export class ClientModule {}
