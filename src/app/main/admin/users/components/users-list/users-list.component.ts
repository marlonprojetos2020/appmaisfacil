import {Component} from '@angular/core';
import {environment} from '../../../../../../environments/environment';
import {DatatableColumn} from '../../../../../shared/component/page-datatable/page-datatable/datatable-column';
import {PoBreadcrumb, PoDialogService, PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Usuários'},
        ],
    };
    pageActions: PoPageAction[] = [
        {label: 'Novo', url: '/admin/usuarios/novo'},
    ];

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [
        {label: 'Visualizar', action: item => this.router.navigateByUrl(`/admin/usuarios/${item.id}`)},
        {label: 'Editar', action: item => this.router.navigateByUrl(`/admin/usuarios/${item.id}/editar`)},
        {label: 'Alterar acesso', action: item => this.toggleEnabled(item)},
        {label: 'Revogar acesso', action: item => this.revokeTokens(item)},
    ];
    columns: DatatableColumn[] = [
        {property: 'id', label: 'Id', visible: false},
        {property: 'name', label: 'Nome'},
        {property: 'email', label: 'E-mail'},
        {
            property: 'roles',
            label: 'Funções',
            type: 'columnTemplate',
            customValue: value => value.map(item => item.label),
            badgePoColor: 'po-color-secondary',
            searchProperty: 'roles.name',
        },
        {
            property: 'enabled',
            label: 'Tem acesso?',
            type: 'boolean',
            boolean: {
                trueLabel: 'Sim',
                falseLabel: 'Não',
            },
        },
    ];

    constructor(
        private userService: UsersService,
        private router: Router,
        private poDialog: PoDialogService,
    ) {
    }

    private toggleEnabled(user: any): void {
        this.poDialog.confirm({
            title: `${user.enabled ? 'Remover' : 'Adicionar'} permissão de acesso ao sistema`,
            message: `Tem certeza que deseja ${user.enabled ? 'remover' : 'adicionar'} a permissão de acesso ao sistema para o usuário ${user.name}`,
            confirm: () => this.userService.toggleEnabled(user.id).subscribe(() => user.enabled = !user.enabled),
        });
    }

    private revokeTokens(user: any): void {
        this.poDialog.confirm({
            title: `Deslogar usuário`,
            message: `Tem certeza que deseja deslogar o usuário ${user.name} de todos os dispositivos? Para acessar o sistema novamente, o usuário precisará efetuar login novamente.`,
            confirm: () => this.userService.revokeTokens(user.id).subscribe(),
        });
    }
}
