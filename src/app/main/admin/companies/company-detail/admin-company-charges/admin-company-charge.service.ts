import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charge } from '../../../../../shared/components/charge-form/models/charge';
import { environment } from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminCompanyChargeService {
    constructor(private httpCliente: HttpClient) {}

    canceledCharge(id: number): Observable<any> {
        return this.httpCliente.post(
            `${environment.apiUrl}/billing/${id}/canceled`,
            id
        );
    }
}
