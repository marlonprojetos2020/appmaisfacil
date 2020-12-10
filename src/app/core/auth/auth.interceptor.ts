import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { filter, finalize, switchMap, take, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    private refreshTokenInProgress = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService, private router: Router) {}

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        // Tem algum token sendo atualizado e o request vem de uma URL do dominio
        if (this.refreshTokenInProgress.value && this.isNonAuthUrl(req)) {
            // caso sim espere o refresh acabar
            this.waitRefreshFinishing(next, req);
        }

        // tenta adicionar o novo header
        return next.handle(this.addAuthorizationHeader(req)).pipe(
            catchError((err) => {
                // se erro for uma instancia do objeto error response
                // e o status do erro for 401 (não autorizado) e não for uma url de auth
                // e estiver logado
                if (
                    err instanceof HttpErrorResponse &&
                    err.status === 401 &&
                    this.isNonAuthUrl(req) &&
                    this.authService.isLogged()
                ) {
                    // se o Refresh token n está sendo renovado
                    if (!this.refreshTokenInProgress.value) {
                        // está começando a iniciar um processo de refresh
                        this.refreshTokenInProgress.next(true);
                        // chama o método de refreshtoken
                        return this.authService
                            .refreshToken()
                            .pipe(
                                catchError((err1) => {
                                    // se houver erro navega para o sessão expirada
                                    this.router.navigate(['/sessao-expirada']);
                                    return throwError(err1);
                                })
                            )
                            .pipe(
                                switchMap(() =>
                                    next.handle(
                                        this.addAuthorizationHeader(req)
                                    )
                                )
                            )
                            .pipe(
                                finalize(() =>
                                    this.refreshTokenInProgress.next(false)
                                )
                            );
                    } else {
                        return throwError(err);
                    }
                }
            })
        );
    }

    private isNonAuthUrl(request: HttpRequest<unknown>): boolean {
        return !request.url.startsWith(environment.apiUrl + '/auth');
    }

    private waitRefreshFinishing(
        next: HttpHandler,
        request: HttpRequest<unknown>
    ): Observable<HttpEvent<unknown>> {
        return (
            this.refreshTokenInProgress
                // filtra só as condições falsas
                .pipe(filter((res) => !res))
                .pipe(take(1))
                .pipe(
                    switchMap(() =>
                        next.handle(this.addAuthorizationHeader(request))
                    )
                )
        );
    }

    // pega o último acesstoken do authservice
    private addAuthorizationHeader(
        request: HttpRequest<unknown>
    ): HttpRequest<unknown> {
        // pega o acess token armazenado
        const accessToken = this.authService.getAccessToken();

        // se o acesstoken existir, a url começar com o site, e não for do módulo de autenticação
        if (
            accessToken &&
            request.url.startsWith(environment.apiUrl) &&
            this.isNonAuthUrl(request)
        ) {
            //  clona o request adicionando no header o acesstoken
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }

        // retornar o request com erro
        return request;
    }
}
