import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyNewInvoiceService {
    constructor(private httpClient: HttpClient) {}

    getClientList(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/client/p/search`
        );
    }
}
