import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankAccount } from './shared/admin-bank-account-form/model/BankAccount';

@Injectable({
    providedIn: 'root'
})
export class AdminCompanyBankService {
    constructor(private httpClient: HttpClient) {}

    listBankAccounts(id: string): Observable<any> {
        return this.httpClient.get(
            `${environment.apiUrl}/users/${id}/bank-accounts`
        );
    }

    newAccount(id: string, bankAccount: BankAccount): Observable<any> {
        return this.httpClient.post<any>(
            `${environment.apiUrl}/users/${id}/bank-accounts`,
            bankAccount
        );
    }

    selectBank(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/banks`);
    }
}
