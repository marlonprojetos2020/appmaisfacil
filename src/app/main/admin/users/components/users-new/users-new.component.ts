import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {UsersService} from '../../services/users.service';
import {User} from '../../user';

@Component({
    selector: 'app-users-new',
    templateUrl: './users-new.component.html',
    styleUrls: ['./users-new.component.scss'],
})
export class UsersNewComponent implements OnInit {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Usuários', link: '/admin/usuarios'},
            {label: 'Novo'},
        ],
    };

    loading = false;

    constructor(
        public userService: UsersService,
    ) {
    }

    ngOnInit(): void {
    }

    save(item: User): string {
        return `/admin/usuarios/${item.id}`;
    }
}
