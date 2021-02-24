import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ChargeListService {
    constructor(private httpClient: HttpClient) {}

    getCompany(): any {
        return this.httpClient.get(`${environment.apiUrl}/profile`);
    }
}
