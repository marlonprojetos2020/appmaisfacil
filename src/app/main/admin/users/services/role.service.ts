import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../../../../core/auth/model/role';
import {environment} from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RoleService {

    constructor(
        private http: HttpClient,
    ) {
    }

    list(): Observable<Role[]> {
        return this.http.get<Role[]>(`${environment.apiUrl}/roles`);
    }
}
