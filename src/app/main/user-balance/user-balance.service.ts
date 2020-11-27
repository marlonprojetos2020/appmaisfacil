import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserBalance} from './model/user-balance';
import {environment} from '../../../environments/environment';
import {UserTransaction} from './model/user-transaction';
import {UserWithdraw} from './model/user-withdraw';

@Injectable({
    providedIn: 'root',
})
export class UserBalanceService {

    constructor(
        private http: HttpClient,
    ) {
    }

    authUserBalance(): Observable<UserBalance> {
        return this.http.get<UserBalance>(`${environment.apiUrl}/user-transaction`);
    }

    requestWithdraw(userWithdraw: UserWithdraw): Observable<UserTransaction> {
        return this.http.post<UserTransaction>(`${environment.apiUrl}/user-transaction`, userWithdraw);
    }
}
