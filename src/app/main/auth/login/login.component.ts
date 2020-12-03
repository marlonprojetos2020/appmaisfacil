import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    login(): void {
        this.router.navigate(['/cliente']);
    }
}
