import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../admin/users/user';

@Component({
    selector: 'app-profile-store',
    templateUrl: './profile-store.component.html',
    styleUrls: ['./profile-store.component.scss'],
})
export class ProfileStoreComponent implements OnInit {

    user: User;

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    back(): void {
        this.router.navigateByUrl('/loja');
    }

    edit(): void {
        this.router.navigateByUrl('/loja/horarios-de-funcionamento');
    }
}
