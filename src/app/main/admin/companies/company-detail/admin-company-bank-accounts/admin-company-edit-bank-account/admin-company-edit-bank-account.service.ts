import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AdminCompanyEditBankAccountService {

    constructor(private httpClient: HttpClient) {}

    findBank(userId: string, bankAccountId: number): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/users/${userId}/bank-accounts/${bankAccountId}`);
    }
}
