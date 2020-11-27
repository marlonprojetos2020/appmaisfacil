import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserBalanceComponent} from './user-balance/user-balance.component';
import {
    PoDividerModule,
    PoFieldModule,
    PoLoadingModule,
    PoPageModule,
    PoTagModule,
    PoTooltipModule,
    PoWidgetModule
} from '@po-ui/ng-components';
import {UserWithdrawComponent} from './user-withdraw/user-withdraw.component';
import {UserTransactionComponent} from './user-transaction/user-transaction.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from '../../shared/component/alert/alert.module';

@NgModule({
    declarations: [
        UserBalanceComponent,
        UserWithdrawComponent,
        UserTransactionComponent,
    ],
    imports: [
        CommonModule,
        PoPageModule,
        PoWidgetModule,
        PoTagModule,
        PoTooltipModule,
        PoLoadingModule,
        ReactiveFormsModule,
        PoFieldModule,
        PoDividerModule,
        AlertModule,
    ],
    exports: [
        UserBalanceComponent,
        UserWithdrawComponent,
    ],
})
export class UserBalanceModule {
}
