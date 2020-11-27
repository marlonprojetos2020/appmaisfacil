import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserWithdrawService} from './user-withdraw.service';
import {UserWithdrawPage} from './user-withdraw-page';

@Injectable({
    providedIn: 'root',
})
export class UserWithdrawResolver implements Resolve<any> {

    constructor(
        private userWithdrawService: UserWithdrawService,
    ) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<UserWithdrawPage> | Promise<UserWithdrawPage> | UserWithdrawPage {
        return this.userWithdrawService
            .find('', 'USER_WITHDRAW');
    }
}
