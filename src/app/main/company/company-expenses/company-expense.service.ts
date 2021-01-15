import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyExpense } from './models/company-expense';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CompanyExpenseService {
    constructor(private httpClient: HttpClient) {}

    createCompanyExpense(companyExpense: CompanyExpense): any {
        this.httpClient.post<CompanyExpense>(
            `${environment.apiUrl}/company/expense`,
            companyExpense
        );
    }
}
