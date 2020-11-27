import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserWithdrawRoutingModule} from './user-withdraw-routing.module';
import {UserWithdrawListComponent} from './user-withdraw-list/user-withdraw-list.component';
import {PoPageDynamicSearchModule} from '@po-ui/ng-templates';
import {PoButtonModule, PoPageModule, PoTagModule, PoTooltipModule, PoWidgetModule} from '@po-ui/ng-components';

@NgModule({
    declarations: [UserWithdrawListComponent],
    imports: [
        CommonModule,
        UserWithdrawRoutingModule,
        PoPageDynamicSearchModule,
        PoWidgetModule,
        PoTagModule,
        PoTooltipModule,
        PoButtonModule,
        PoPageModule,
    ],
})
export class UserWithdrawModule {
}
