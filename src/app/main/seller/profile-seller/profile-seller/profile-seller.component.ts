import {Component, OnInit} from '@angular/core';
import {User} from '../../../admin/users/user';
import {Router} from '@angular/router';
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-profile-seller',
    templateUrl: './profile-seller.component.html',
    styleUrls: ['./profile-seller.component.scss'],
})
export class ProfileSellerComponent implements OnInit {

    user: User;

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    back(): void {
        this.router.navigateByUrl('/vendedor');
    }

    edit(): void {
        window.location.href = `https://api.whatsapp.com/send?phone=55${environment.supportPhone.replace(/[^0-9]/g, '')}&text=Olá, preciso alterar os dados cadastrados na minha conta. Pode me ajudar?`;
    }

}
