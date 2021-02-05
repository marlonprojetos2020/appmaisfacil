import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyDashboardService {
    constructor(private httpClient: HttpClient) {}

    getBillingStatus(status: string): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/billing/p/search?status=${status}`
        );
    }

    getStatementsStatus(status: string): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/statement/p/search?status=${status}`
        );
    }

    getEmployessStatus(status: string): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/employee/p/search?status=${status}`
        );
    }

    getNotaFiscalStatus(status: string): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/nota-fiscal/p/search?status=${status}`
        );
    }
}
