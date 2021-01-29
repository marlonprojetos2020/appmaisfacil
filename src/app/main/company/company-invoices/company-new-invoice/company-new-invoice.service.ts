import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Invoice } from './models/invoice';

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

    createInvoice(invoice: Invoice): Observable<Invoice> {
        console.log(invoice);
        return this.httpClient.post<Invoice>(
            `${environment.apiUrl}/company/nota-fiscal`,
            invoice
        );
    }
}
