import {Component} from '@angular/core';
import {PoBreadcrumb, PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/component/page-datatable/page-datatable/datatable-column';
import {UsersService} from '../../users/services/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-seller-list',
    templateUrl: './seller-list.component.html',
    styleUrls: ['./seller-list.component.scss'],
})
export class SellerListComponent {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Vendedores'},
        ],
    };
    pageActions: PoPageAction[] = [
        {label: 'Novo', url: '/admin/vendedores/novo'},
    ];

    serviceApi = `${environment.apiUrl}/seller/p/search`;
    tableActions: PoTableAction[] = [
        {label: 'Visualizar', action: item => this.router.navigateByUrl(`/admin/vendedores/${item.id}`)},
        {label: 'Editar', action: item => this.router.navigateByUrl(`/admin/vendedores/${item.id}/editar`)},
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
