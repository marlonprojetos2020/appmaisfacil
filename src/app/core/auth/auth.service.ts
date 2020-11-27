import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credentials} from './model/credentials';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, pipe, throwError} from 'rxjs';
import {PoPageLogin} from '@po-ui/ng-templates';
import {catchError, tap} from 'rxjs/operators';
import {JwtService} from './jwt.service';
import {UserDetails} from './model/user-details';
import {RoleType} from './model/role-type';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private userDetails = new BehaviorSubject<UserDetails>(null);

    constructor(
        private http: HttpClient,
        private tokenService: JwtService,
    ) {
        this.notifyUserDetails();
    }

    login(poPageLogin: PoPageLogin): Observable<Credentials> {
        return this.loginTapPipe(this.http.post<Credentials>(`${environment.apiUrl}/auth`, poPageLogin));
    }

    loginTapPipe(response: Observable<Credentials>): Observable<Credentials> {
        return response
            .pipe(tap(this.tokenService.saveCredentials.bind(this.tokenService)))
            .pipe(tap(this.notifyUserDetails.bind(this)));
    }

    getUserDetails(): Observable<UserDetails> {
        return this.userDetails.asObservable();
    }

    getUserDetailsSnapshot(): UserDetails {
        return this.userDetails.value;
    }

    logout(): void {
        this.tokenService.clearStorage();
        this.userDetails.next(null);
    }

    isAuthenticated(): boolean {
        return this.userDetails.value !== null;
    }

    isAnonymous(): boolean {
        return !this.isAuthenticated();
    }

    isAdmin(): boolean {
        return this.getUserDetailsSnapshot()
            .roles.map(role => role.value)
            .includes(RoleType.ROLE_ADMIN);
    }

    isStore(): boolean {
        return this.getUserDetailsSnapshot()
            .roles.map(role => role.value)
            .includes(RoleType.ROLE_STORE);
    }

    isSeller(): boolean {
        return this.getUserDetailsSnapshot()
            .roles.map(role => role.value)
            .includes(RoleType.ROLE_SELLER);
    }

    getAccessToken(): string {
        const credentials = this.tokenService.getCredentials();
        return credentials && credentials.accessToken;
    }

    getRefreshToken(): string {
        const credentials = this.tokenService.getCredentials();
        return credentials && credentials.refreshToken;
    }

    refresh(): Observable<any> {
        const refreshToken = this.getRefreshToken();
        const headers = {'X-PO-No-Message': 'true'};

        return this.loginTapPipe(this.http.post<Credentials>(`${environment.apiUrl}/auth/refresh`, {refreshToken}, {headers})
            .pipe(catchError(err => {
                this.logout();
                return throwError(err);
            })),
        );
    }

    updateUserDetails(userDetails: UserDetails): void {
        this.tokenService.saveCredentials({...this.tokenService.getCredentials(), userDetails});
        this.notifyUserDetails();
    }

    private notifyUserDetails(): void {
        this.userDetails.next(this.tokenService.getUserDetails());
    }

}
