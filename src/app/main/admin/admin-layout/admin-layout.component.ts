import {Component, OnInit} from '@angular/core';
import {PoMenuItem, PoToolbarAction, PoToolbarProfile} from '@po-ui/ng-components';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

    pProfile: PoToolbarProfile;
    profileActions: Array<PoToolbarAction> = [
        {
            icon: 'po-icon-user',
            label: 'Perfil',
            url: '/admin/perfil',
        },
        {
            icon: 'po-icon-lock',
            label: 'Alterar senha',
            url: '/alterar-senha',
        },
        {
            icon: 'po-icon-device-desktop',
            label: 'Módulo lojista',
            url: '/loja',
            separator: true,
            visible: this.authService.isStore(),
        },
        {
            icon: 'po-icon-device-desktop',
            label: 'Módulo vendedor',
            url: '/vendedor/produtos',
            separator: true,
            visible: this.authService.isSeller(),
        },
        {
            icon: 'po-icon-exit',
            label: 'Sair',
            type: 'danger',
            separator: true,
            action: () => {
                this.authService.logout();
                this.router.navigateByUrl('/');
            },
        },
    ];

    readonly menus: Array<PoMenuItem> = [
        {
            label: 'Dashboard',
            link: '/admin',
        },
        {
            label: 'Anúncios',
            link: '/admin/produtos',
        },
        {
            label: 'Pedidos',
            link: '/admin/pedidos',
        },
        {
            label: 'Extrato',
            link: '/admin/extrato',
        },
        {
            label: 'Saques',
            link: '/admin/saques',
        },
        {
            label: 'Lojas',
            link: '/admin/lojas',
        },
        {
            label: 'Categorias',
            link: '/admin/lojas/categorias',
        },
        {
            label: 'Vendedores',
            link: '/admin/vendedores',
        },
        {
            label: 'Anúncios',
            link: '/admin/anuncios',
        },
        {
            label: 'Avançado',
            subItems: [
                {
                    label: 'Usuários',
                    link: '/admin/usuarios',
                },
            ],
        },
    ];

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.authService.getUserDetails()
            .pipe(filter(user => !!user))
            .subscribe(
                user => this.pProfile = {
                    title: user.name,
                    subtitle: user.roles.map(role => role.label).join(', '),
                    avatar: user.userPhoto && user.userPhoto.sm,
                },
            );
    }

}
