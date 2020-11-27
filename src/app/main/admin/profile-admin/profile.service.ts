import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../users/user';
import {environment} from '../../../../environments/environment';
import {UserDetails} from '../../../core/auth/model/user-details';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {

    constructor(
        private http: HttpClient,
    ) {
    }

    profile(): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/profile`);
    }

    update(userDetails: UserDetails): Observable<UserDetails> {
        return this.http.post<User>(`${environment.apiUrl}/profile`, userDetails);
    }

    deleteProfilePhoto(): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/profile/photo`);
    }
}
