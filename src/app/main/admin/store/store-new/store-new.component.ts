import {Component} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {UsersService} from '../../users/services/users.service';
import {RoleType} from '../../../../core/auth/model/role-type';
import {User} from '../../users/user';
import {StoreCategory} from '../../store-category/store-category';

@Component({
    selector: 'app-store-new',
    templateUrl: './store-new.component.html',
    styleUrls: ['./store-new.component.scss'],
})
export class StoreNewComponent {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Lojas', link: '/admin/lojas'},
            {label: 'Nova'},
        ],
    };

    loading = false;
    user = {roles: [{value: RoleType.ROLE_STORE}]} as User;

    constructor(
        public userService: UsersService,
    ) {
    }

    save(item: StoreCategory): string {
        return `/admin/lojas/${item.id}`;
    }
}
