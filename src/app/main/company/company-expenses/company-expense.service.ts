import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyExpense } from './models/company-expense';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompanyExpenseService {
    constructor(private httpClient: HttpClient) {}

    createCompanyExpense(
        companyExpense: CompanyExpense
    ): Observable<CompanyExpense> {
        return this.httpClient.post<CompanyExpense>(
            `${environment.apiUrl}/company/expense`,
            companyExpense
        );
    }

    getTypeExpense(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/expense/types`
        );
    }

    getCompanyExpense(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
    }
}
