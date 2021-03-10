import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AdminChargesService {
    constructor(private httpClient: HttpClient) {}

    paidCharge(id: number): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/billing/${id}/paid`,
            id
        );
    }

    recuseCharge(id: number): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/billing/${id}/refused`,
            id
        );
    }

    canceledCharge(id: number): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/billing/${id}/canceled`,
            id
        );
    }
}
