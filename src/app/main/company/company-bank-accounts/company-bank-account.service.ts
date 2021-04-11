import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class CompanyBankAccountService {
    constructor(private httpClient: HttpClient) {}

    toggleAccount(bankId: number): Observable<any> {
        return this.httpClient.put<any>(
            `${environment.apiUrl}/company/bank-account/${bankId}/toggle-enabled`,
            null
        );
    }
}
