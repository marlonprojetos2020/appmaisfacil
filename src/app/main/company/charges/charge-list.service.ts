import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ChargeListService {
    constructor(private httpClient: HttpClient) {}

    getCompany(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
    }
}
