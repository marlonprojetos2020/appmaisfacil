import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyBankStatementService {
    constructor(private httpCliente: HttpClient) {}

    getBankName(): any {
        return this.httpCliente.get(
            `${environment.apiUrl}/company/statement/p/search`
        );
    }
}
