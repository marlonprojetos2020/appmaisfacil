import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../user';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent implements OnInit {

    user: User;

    breadcrumb: PoBreadcrumb;

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
                {label: 'Usuários', link: '/admin/usuarios'},
                {label: this.user.name, link: `/admin/usuarios/${this.user.id}`},
                {label: 'Editar'},
            ],
        };

        this.detailPage = `/admin/usuarios/${this.user.id}`;
    }
}
