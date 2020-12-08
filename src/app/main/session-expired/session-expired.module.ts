import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionExpiredRoutingModule} from './session-expired-routing.module';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import {PoPageBlockedUserModule} from '@po-ui/ng-templates';

@NgModule({
    declarations: [SessionExpiredComponent],
    imports: [
        CommonModule,
        SessionExpiredRoutingModule,
        PoPageBlockedUserModule,
    ],
})
export class SessionExpiredModule {
}
