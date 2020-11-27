import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerBalanceComponent } from './seller-balance/seller-balance.component';
import {UserBalanceModule} from '../../user-balance/user-balance.module';
import {SellerBalanceRoutingModule} from './seller-balance-routing.module';
import { SellerWithdrawComponent } from './seller-withdraw/seller-withdraw.component';

@NgModule({
  declarations: [SellerBalanceComponent, SellerWithdrawComponent],
    imports: [
        CommonModule,
        SellerBalanceRoutingModule,
        UserBalanceModule,
    ],
})
export class SellerBalanceModule { }
