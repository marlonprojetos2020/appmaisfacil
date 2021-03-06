import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CompanyEditBankAccountService {

    constructor(private httpClient: HttpClient) {}

    findBank(bankAccountId: number): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/company/bank-account/${bankAccountId}`);
    }
}
