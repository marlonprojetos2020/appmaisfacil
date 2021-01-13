import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminCompanyChargeService {
    constructor(private httpClient: HttpClient) {}

    getTypeCharge(): any {
        return this.httpClient.get(`${environment.apiUrl}/billing/types`);
    }
}
