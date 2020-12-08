import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PoPageBlockedUserReason} from '@po-ui/ng-templates';

@Component({
    selector: 'app-session-expired',
    templateUrl: './session-expired.component.html',
    styleUrls: ['./session-expired.component.scss'],
})
export class SessionExpiredComponent implements OnInit {

    contactEmail = environment.supportEmail;
    contactPhone = environment.supportPhone;
    reason = PoPageBlockedUserReason.None;

    constructor() {
    }

    ngOnInit(): void {
    }

}
