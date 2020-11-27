import {Component} from '@angular/core';
import {PoBreadcrumb, PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/component/page-datatable/page-datatable/datatable-column';
import {UsersService} from '../../users/services/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-store-list',
    templateUrl: './store-list.component.html',
    styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent {
    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Lojas'},
        ],
    };
    pageActions: PoPageAction[] = [
        {label: 'Nova', url: '/admin/lojas/novo'},
    ];

    serviceApi = `${environment.apiUrl}/store/p/search`;
    tableActions: PoTableAction[] = [
        {label: 'Visualizar', action: item => this.router.navigateByUrl(`/admin/lojas/${item.id}`)},
        {label: 'Editar', action: item => this.router.navigateByUrl(`/admin/lojas/${item.id}/editar`)},
    ];
    columns: DatatableColumn[] = [
        {property: 'id', label: 'Id', visible: false},
        {property: 'name', label: 'Nome'},
        {property: 'email', label: 'E-mail'},
    ];

    constructor(
        private userService: UsersService,
        private router: Router,
    ) {
    }

}
