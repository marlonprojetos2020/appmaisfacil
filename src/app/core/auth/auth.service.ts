import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { JwtService } from './jwt.service';
import { Credentials } from './model/credentials';
import { UserDetails } from './model/user-details';
import { RoleType } from './model/role-type';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private userDetails = new BehaviorSubject<UserDetails>(null);

    constructor(
        private httpClient: HttpClient,
        private jwtService: JwtService,
    ) {
        // verifica se já tem algo salvo
        this.notifyUserDetails();
        this.isAdmin();
    }

    login(poPageLogin: PoPageLogin): Observable<Credentials> {
        return this.httpClient.post<Credentials>(`${environment.apiUrl}/auth`, poPageLogin)
            .pipe(tap(credentials => this.jwtService.saveCredentials(credentials)))
            .pipe(tap(() => this.notifyUserDetails()));
    }

    //  Retornando os dados do usuário e forma de usuário para que ele faça um subscribe
    getUserDetails(): Observable<UserDetails> {
        return this.userDetails.asObservable();
    }

    getUserDetailsSnapshot(): UserDetails {
        return this.userDetails.value;
    }

    logout(): void {
        this.jwtService.clearStorage();
        this.userDetails.next(null);
    }

    private notifyUserDetails(): void {
        this.userDetails.next(this.jwtService.getUserDetails());
    }

    // AUTH GUARD && LOGIN GUARD - Confere se está logado
    isLogged(): boolean {
        return this.userDetails.value !== null;
    }

    // ADMIN GUARD - confere se é ADMIN
    isAdmin(): boolean {
        return this.getUserDetailsSnapshot()
            .roles.map(role => role.value)
            .includes(RoleType.ROLE_ADMIN);
    }

    // COMPANY GUARD - confere se é CLIENT
    isCompany(): boolean {
        return this.getUserDetailsSnapshot()
            .roles.map(role => role.value)
            .includes(RoleType.ROLE_COMPANY);
    }
}
