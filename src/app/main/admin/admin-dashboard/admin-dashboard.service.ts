import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminDashboardService {
    constructor(private httpClient: HttpClient) {}

    getQuantityServiceDashboard(): any {
        return this.httpClient.get(`${environment.apiUrl}/dashboard/admin`);
    }
}
