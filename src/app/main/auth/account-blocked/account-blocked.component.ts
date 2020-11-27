import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PoPageBlockedUserReason} from '@po-ui/ng-templates';

@Component({
    selector: 'app-account-blocked',
    templateUrl: './account-blocked.component.html',
    styleUrls: ['./account-blocked.component.scss'],
})
export class AccountBlockedComponent implements OnInit {

    contactEmail = environment.supportEmail;
    contactPhone = environment.supportPhone;
    reason = PoPageBlockedUserReason.ExceededAttempts;

    constructor() {
    }

    ngOnInit(): void {
    }

}
