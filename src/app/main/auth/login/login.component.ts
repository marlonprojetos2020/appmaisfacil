import { Component, OnInit } from '@angular/core';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    login(): void {
        alert('oi');
    }
}
