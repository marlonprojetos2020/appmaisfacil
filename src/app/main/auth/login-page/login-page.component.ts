import {Component, OnInit} from '@angular/core';
import {PoPageLogin, PoPageLoginLiterals, PoPageLoginRecovery} from '@po-ui/ng-templates';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../core/auth/auth.service';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

    loadingSubmit = false;

    supportEmail = environment.supportEmail;
    loginRecovery: PoPageLoginRecovery = {
        url: `${environment.apiUrl}/auth/recover-password`,
    };

    exceededAttemptsWarning: number;
    literals: PoPageLoginLiterals = {registerUrl: 'Quero ser um vendedor'};

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    handleSubmit(poPageLogin: PoPageLogin): void {
        this.loadingSubmit = true;
        this.authService.login(poPageLogin)
            .pipe(finalize(() => this.loadingSubmit = false))
            .subscribe(
                () => this.router.navigateByUrl('/admin'),
                (err: HttpErrorResponse) => this.updateExceededAttemptsWarning(err.error.attemptsRemaining),
            );
    }

    updateExceededAttemptsWarning(attemptsRemaining: number): void {
        if (attemptsRemaining <= 0) {
            this.router.navigateByUrl('/acessar/conta-bloqueada');
        }

        if (attemptsRemaining <= 3) {
            this.exceededAttemptsWarning = attemptsRemaining;
        }
    }
}
