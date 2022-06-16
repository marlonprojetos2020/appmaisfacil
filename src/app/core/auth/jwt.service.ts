import { Injectable } from '@angular/core';
import { Credentials } from './model/credentials';
import { UserDetails } from './model/user-details';

@Injectable({
    providedIn: 'root',
})
export class JwtService {

    private REMEMBER_USER_KEY = 'REMEMBER_USER';
    private CREDENTIALS_KEY = 'CREDENTIALS_KEY';

    constructor() {}

    saveCredentials(credentials: Credentials): void {
        this.clearStorage();
        localStorage.setItem(this.REMEMBER_USER_KEY, credentials.rememberUser.toString());
        if (credentials.rememberUser) {
            localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
        } else {
            sessionStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
        }
    }

    // retorna somente o objeto user Detail, caso ele exista
    public getUserDetails(): UserDetails {
        return this.getCredentials() && this.getCredentials().userDetails;
    }

    public getCredentials(): Credentials {
        // caso n tenha tenha feito o login o campo não vai existir retorna null
        if (!localStorage.getItem(this.REMEMBER_USER_KEY)) {
            return null;
        }

        //  caso tenha feito login "REMEMBER USER KEY" vai estar preenchido
        if (localStorage.getItem(this.REMEMBER_USER_KEY) === 'true') {
            // se tiver marcado como true vai estar armazenado no local storage
            return JSON.parse(localStorage.getItem(this.CREDENTIALS_KEY));
        } else {
            // se tiver marcado como false vai estar armazenado no session storage
            return JSON.parse(sessionStorage.getItem(this.CREDENTIALS_KEY));
        }
    }

    clearStorage(): void {
        localStorage.removeItem(this.CREDENTIALS_KEY);
        localStorage.removeItem(this.REMEMBER_USER_KEY);
        sessionStorage.clear();
    }
}
