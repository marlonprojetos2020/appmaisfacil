import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BankAccountComponent} from './bank-account/bank-account.component';
import {UserBankAccountModule} from '../../user-bank-account/user-bank-account.module';
import {BankAccountRoutingModule} from './bank-account-routing.module';

@NgModule({
    declarations: [BankAccountComponent],
    imports: [
        CommonModule,
        BankAccountRoutingModule,
        UserBankAccountModule,
    ],
})
export class BankAccountModule {
}
