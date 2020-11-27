import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserBalance} from './model/user-balance';
import {UserBalanceService} from './user-balance.service';

@Injectable({
    providedIn: 'root',
})
export class UserBalanceResolver implements Resolve<UserBalance> {

    constructor(private userBalanceService: UserBalanceService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.userBalanceService.authUserBalance();
    }
}
