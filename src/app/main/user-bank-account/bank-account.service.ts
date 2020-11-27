import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../admin/users/bank-account/bank-account';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BankAccountService {

    constructor(
        private http: HttpClient,
    ) {
    }

    updateBankAccount(bankAccount: BankAccount): Observable<BankAccount> {
        return this.http.post<BankAccount>(`${environment.apiUrl}/profile/bank-account`, bankAccount);
    }

}
