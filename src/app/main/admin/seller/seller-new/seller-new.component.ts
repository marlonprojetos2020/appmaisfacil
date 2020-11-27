import { Component, OnInit } from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {RoleType} from '../../../../core/auth/model/role-type';
import {User} from '../../users/user';
import {UsersService} from '../../users/services/users.service';
import {StoreCategory} from '../../store-category/store-category';

@Component({
  selector: 'app-seller-new',
  templateUrl: './seller-new.component.html',
  styleUrls: ['./seller-new.component.scss'],
})
export class SellerNewComponent {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Vendedores', link: '/admin/vendedores'},
            {label: 'Novo'},
        ],
    };

    loading = false;
    user = {roles: [{value: RoleType.ROLE_SELLER}]} as User;

    constructor(
        public userService: UsersService,
    ) {
    }

    save(item: StoreCategory): string {
        return `/admin/vendedores/${item.id}`;
    }

}
