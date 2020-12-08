import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoPageLogin } from '@po-ui/ng-templates';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    loadingSubmit: boolean;

    constructor(
        private router: Router,
        private authSerice: AuthService,
    ) {}

    ngOnInit(): void {
    }

    login(loginCredentials: PoPageLogin): void {
        this.loadingSubmit = true;
        this.authSerice.login(loginCredentials)
            .pipe(finalize(() => this.loadingSubmit = false))
            .subscribe(
                () => this.router.navigate(['/empresa']));
    }
}
