import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {User} from '../../users/user';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../users/services/users.service';

@Component({
    selector: 'app-store-edit',
    templateUrl: './store-edit.component.html',
    styleUrls: ['./store-edit.component.scss'],
})
export class StoreEditComponent implements OnInit {

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
                {label: 'Lojas', link: '/admin/lojas'},
                {label: this.user.name, link: `/admin/lojas/${this.user.id}`},
                {label: 'Editar'},
            ],
        };

        this.detailPage = `/admin/lojas/${this.user.id}`;
    }

}
