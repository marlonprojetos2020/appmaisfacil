import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { BankStatement } from './models/bank-statements';

@Injectable({
    providedIn: 'root',
})
export class CompanyBankStatementService {
    constructor(private httpCliente: HttpClient) {}

    getBankName(id: number): any {
        return this.httpCliente.get(
            `${environment.apiUrl}/users/${id}/bank-accounts`
        );
    }

    createStatement(
        id: number,
        newStatement: BankStatement
    ): Observable<BankStatement> {
        return this.httpCliente.post<BankStatement>(
            `${environment.apiUrl}/company/statement/bank-account/${id}`,
            newStatement
        );
    }
}
