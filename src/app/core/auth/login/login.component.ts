import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin, PoPageLoginRecovery } from '@po-ui/ng-templates';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loadingSubmit: boolean;
    loginRecovery: PoPageLoginRecovery = {
        url: `${environment.apiUrl}/auth/recover-password`,
    };

    constructor(private router: Router, private authSerice: AuthService) {}

    ngOnInit(): void {}

    login(loginCredentials: PoPageLogin): void {
        this.loadingSubmit = true;
        this.authSerice
            .login(loginCredentials)
            .pipe(finalize(() => (this.loadingSubmit = false)))
            .subscribe((data) => {
                this.router.navigate(['/empresa']);
                console.log(data);
            });
    }
}
