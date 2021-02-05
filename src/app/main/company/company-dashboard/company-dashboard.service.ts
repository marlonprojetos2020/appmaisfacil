import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyDashboardService {
    constructor(private httpClient: HttpClient) {}

    getBillingPending(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/billing/p/search?status=PENDING`
        );
    }

    getBillingRefused(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/billing/p/search?status=REFUSED`
        );
    }

    getBillingPendingReview(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/comapny/billing/p/search?status=PENDING_REVIEW`
        );
    }
}
