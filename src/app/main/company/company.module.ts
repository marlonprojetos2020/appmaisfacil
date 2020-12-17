import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { CompanyDashboardModule } from './company-dashboard/company-dashboard.module';
import { NeedHelpComponent } from './company-layout/need-help/need-help.component';
import { ChargesModule } from './charges/charges.module';
import {CompanyMyAccountMoudle} from './company-my-account/company-my-account.module';

@NgModule({
    declarations: [CompanyLayoutComponent, NeedHelpComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        PoToolbarModule,
        PoMenuModule,
        CompanyDashboardModule,
        ChargesModule,
        CompanyMyAccountMoudle,
    ],
    exports: [],
    providers: [],
})
export class CompanyModule {}
