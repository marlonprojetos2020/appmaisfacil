import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EmployeeListService {
    constructor(private httpCLient: HttpClient) {}

    getStatusEmployee(): any {
        return this.httpCLient.get(
            `${environment.apiUrl}/employee/p/search?search=PENDING_FIRED`
        );
    }

    setFired(id: number): any {
        return this.httpCLient.post(
            `${environment.apiUrl}/employee/${id}/fired-file`,
            id
        );
    }

    acceptHired(id: number): any {
        return this.httpCLient.post(`${environment.apiUrl}/employee/${id}/accept`, id);
    }

    refuseHired(id: number): any {
        return this.httpCLient.post(`${environment.apiUrl}/employee/${id}/refuse`, id);
    }
}
