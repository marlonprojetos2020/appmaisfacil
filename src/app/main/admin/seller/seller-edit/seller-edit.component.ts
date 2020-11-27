import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {User} from '../../users/user';
import {UsersService} from '../../users/services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-seller-edit',
    templateUrl: './seller-edit.component.html',
    styleUrls: ['./seller-edit.component.scss'],
})
export class SellerEditComponent implements OnInit {

    breadcrumb: PoBreadcrumb;
    user: User;

    loading = false;

    detailPage: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        public userService: UsersService,
    ) {
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.user;
        this.breadcrumb = {
            items: [
                {label: 'Dashboard', link: '/admin'},
                {label: 'Vendedores', link: '/admin/vendedores'},
                {label: this.user.name, link: `/admin/vendedores/${this.user.id}`},
                {label: 'Editar'},
            ],
        };

        this.detailPage = `/admin/vendedores/${this.user.id}`;
    }

}
