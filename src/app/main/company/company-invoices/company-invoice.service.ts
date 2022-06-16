import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyInvoiceService {
    constructor(private httpClient: HttpClient) {}

    cancelInvoice(id: number): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/company/nota-fiscal/${id}/request-cancel`,
            id
        );
    }
}
