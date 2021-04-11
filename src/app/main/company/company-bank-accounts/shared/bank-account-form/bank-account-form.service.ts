import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankAccount } from './model/BankAccount';

@Injectable({
    providedIn: 'root'
})
export class BankAccountFormService {
    constructor(private httpClient: HttpClient) {}

    listBankAccounts(): Observable<any> {
        return this.httpClient.get(
            `${environment.apiUrl}/company/bank-account`
        );
    }

    newAccount(bankAccount: BankAccount): Observable<any> {
        return this.httpClient.post<any>(
            `${environment.apiUrl}/company/bank-account`,
            bankAccount
        );
    }

    editAccount(bankId: number, bankAccount: BankAccount): Observable<any> {
        return this.httpClient.put<any>(
            `${environment.apiUrl}/company/bank-account/${bankId}`,
            bankAccount
        );
    }

    selectBank(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/banks`);
    }
}
