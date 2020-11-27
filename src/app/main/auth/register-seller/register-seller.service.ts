import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {SellerForm} from './seller-form';
import {AuthService} from '../../../core/auth/auth.service';
import {Credentials} from '../../../core/auth/model/credentials';

@Injectable({
    providedIn: 'root',
})
export class RegisterSellerService {

    constructor(
        private http: HttpClient,
    ) {
    }

    save(seller: SellerForm): Observable<Credentials> {
        return this.http.post<Credentials>(`${environment.apiUrl}/register-seller`, seller);
    }
}
