import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminInvoiceService {
    constructor(private httpClient: HttpClient) {}

    getCompany(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
    }

    getInvoice(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/nota-fiscal/${id}`);
    }

    cancelInvoiceAdmin(id: number): any {
        return this.httpClient.post(
            `${environment.apiUrl}/nota-fiscal/${id}/cancel`,
            id
        );
    }

    getInvoiceList(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/nota-fiscal/p/search`
        );
    }
}
