import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UsersPhotoService {

    constructor(
        private http: HttpClient,
    ) {
    }

    deleteProfilePhoto(id: number): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/users/${id}/photo`);
    }

}
