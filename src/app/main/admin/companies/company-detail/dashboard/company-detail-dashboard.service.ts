import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyDetailDashboardService {
    constructor(private httpClient: HttpClient) {}

    getBilling(status: string, id: number): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/billing/p/search?status=${status}&companyId=${id}`
        );
    }

    getEmployee(status: string, id: number): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/employee/p/search?status=${status}&companyId=${id}`
        );
    }

    getBankStatement(status: string, id: number): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/statement/p/search?status=${status}&companyId=${id}`
        );
    }

    getNotaFiscal(status: string, id: number): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/nota-fiscal/p/search?status=${status}&companyId=${id}`
        );
    }
}
