import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountBalance} from './model/account-balance';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AccountBalanceService {

    constructor(
        private http: HttpClient,
    ) {
    }

    list(): Observable<AccountBalance> {
        return this.http.get<AccountBalance>(`${environment.apiUrl}/account-transaction`);
    }
}
