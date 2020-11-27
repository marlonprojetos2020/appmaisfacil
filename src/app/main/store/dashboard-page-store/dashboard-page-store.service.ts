import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DashboardStoreService {

    constructor(private httpClient: HttpClient) {}

    getDashboard(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/dashboard/store`);
    }
}