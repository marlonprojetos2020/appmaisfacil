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
}
