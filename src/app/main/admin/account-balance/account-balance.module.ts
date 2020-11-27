import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountBalanceComponent} from './account-balance/account-balance.component';
import {AccountBalanceRoutingModule} from './account-balance-routing.module';
import {PoPageModule, PoTagModule, PoTooltipModule, PoWidgetModule} from '@po-ui/ng-components';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';

@NgModule({
    declarations: [AccountBalanceComponent, AccountTransactionComponent],
    imports: [
        CommonModule,
        AccountBalanceRoutingModule,
        PoPageModule,
        PoWidgetModule,
        PoTagModule,
        PoTooltipModule,
    ],
})
export class AccountBalanceModule {
}
