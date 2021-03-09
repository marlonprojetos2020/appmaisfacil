import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class adminCompanyBankAccountService {
    constructor(private httpClient: HttpClient) {}

    toggleAccount(userId: string, bankId: number): Observable<any> {
        return this.httpClient.put<any>(
            `${environment.apiUrl}/users/${userId}/bank-accounts/${bankId}/toggle-enabled`,
            null
        );
    }
}
