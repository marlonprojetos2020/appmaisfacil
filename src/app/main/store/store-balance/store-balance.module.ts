import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreBalanceComponent } from './store-balance/store-balance.component';
import {UserBalanceModule} from '../../user-balance/user-balance.module';
import {StoreBalanceRoutingModule} from './store-balance-routing.module';
import { StoreWithdrawComponent } from './store-withdraw/store-withdraw.component';

@NgModule({
  declarations: [StoreBalanceComponent, StoreWithdrawComponent],
    imports: [
        CommonModule,
        StoreBalanceRoutingModule,
        UserBalanceModule,
    ],
})
export class StoreBalanceModule { }
