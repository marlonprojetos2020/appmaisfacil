import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountBalance} from './model/account-balance';
import {AccountBalanceService} from './account-balance.service';

@Injectable({
    providedIn: 'root',
})
export class AccountBalanceResolver implements Resolve<AccountBalance> {

    constructor(private accountBalanceService: AccountBalanceService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.accountBalanceService.list();
    }
}
