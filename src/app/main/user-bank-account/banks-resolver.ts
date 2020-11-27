import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Bank} from '../admin/users/bank-account/bank';
import {BankService} from './bank.service';

@Injectable({
    providedIn: 'root',
})
export class BanksResolver implements Resolve<Bank[]> {

    constructor(
        private bankService: BankService,
    ) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.bankService.list();
    }
}
