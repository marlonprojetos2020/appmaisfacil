import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Charge } from './models/charge';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ChargeFormService {
    constructor(private httpClient: HttpClient) {}

    getTypeCharge(): any {
        return this.httpClient.get(`${environment.apiUrl}/billing/types`);
    }

    createBilling(billing: Charge): Observable<Charge> {
        return this.httpClient.post<Charge>(
            `${environment.apiUrl}/billing`,
            billing
        );
    }

    getCharge(id: string): Observable<Charge> {
        return this.httpClient.get<Charge>(
            `${environment.apiUrl}/billing/${id}`
        );
    }

    creatBillingFile(file: any, id: string): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/billing/${id}/billing-file`,
            file
        );
    }
}
