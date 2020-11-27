import {Injectable} from '@angular/core';
import {Credentials} from './model/credentials';
import {UserDetails} from './model/user-details';

@Injectable({
    providedIn: 'root',
})
export class JwtService {

    private REMEMBER_USER_KEY = 'REMEMBER_USER';
    private CREDENTIALS_KEY = 'CREDENTIALS_KEY';

    constructor() {
    }

    public saveCredentials(credentials: Credentials): void {
        this.clearStorage();

        localStorage.setItem(this.REMEMBER_USER_KEY, String(credentials.rememberUser));

        if (credentials.rememberUser) {
            localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
        } else {
            sessionStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
        }
    }

    public getUserDetails(): UserDetails {
        return this.getCredentials() && this.getCredentials().userDetails;
    }

    public getCredentials(): Credentials {
        if (!localStorage.getItem(this.REMEMBER_USER_KEY)) {
            return null;
        }

        if (localStorage.getItem(this.REMEMBER_USER_KEY) === 'true') {
            return JSON.parse(localStorage.getItem(this.CREDENTIALS_KEY));
        } else {
            return JSON.parse(sessionStorage.getItem(this.CREDENTIALS_KEY));
        }
    }

    public clearStorage(): void {
        localStorage.clear();
        sessionStorage.clear();
    }
}
