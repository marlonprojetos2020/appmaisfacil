import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {environment} from '../../../environments/environment';
import {catchError, filter, finalize, switchMap, take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private refreshTokenInProgress = new BehaviorSubject<boolean>(false);

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (this.refreshTokenInProgress.value && this.isNonAuthUrl(request)) {
            return this.waitRefreshFinishing(next, request);
        }

        return next.handle(this.addAuthorizationHeader(request))
            .pipe(catchError(
                (err: HttpErrorResponse) => {
                    if (
                        err instanceof HttpErrorResponse &&
                        err.status === 401 && this.isNonAuthUrl(request) &&
                        this.authService.isAuthenticated()
                    ) {
                        if (!this.refreshTokenInProgress.value) {
                            this.refreshTokenInProgress.next(true);
                            return this.authService.refresh()
                                .pipe(catchError(err1 => {
                                    this.router.navigateByUrl('/sessao-expirada');
                                    return throwError(err1);
                                }))
                                .pipe(switchMap(res => next.handle(this.addAuthorizationHeader(request))))
                                .pipe(finalize(() => this.refreshTokenInProgress.next(false)));
                        }
                    } else {
                        return throwError(err);
                    }
                }),
            );
    }

    private waitRefreshFinishing(next: HttpHandler, request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
        return this.refreshTokenInProgress
            .pipe(filter(res => !res))
            .pipe(take(1))
            .pipe(switchMap(res => next.handle(this.addAuthorizationHeader(request))));
    }

    private addAuthorizationHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
        const accessToken = this.authService.getAccessToken();

        if (accessToken && request.url.startsWith(environment.apiUrl) && this.isNonAuthUrl(request)) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }

        return request;
    }

    private isNonAuthUrl(request: HttpRequest<unknown>): boolean {
        return !request.url.startsWith(environment.apiUrl + '/auth');
    }
}
