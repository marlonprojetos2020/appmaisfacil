import {Component, OnInit} from '@angular/core';
import {PoMenuItem, PoToolbarAction, PoToolbarProfile} from '@po-ui/ng-components';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-store-layout',
    templateUrl: './store-layout.component.html',
    styleUrls: ['./store-layout.component.scss'],
})
export class StoreLayoutComponent implements OnInit {

    pProfile: PoToolbarProfile;
    profileActions: Array<PoToolbarAction> = [
        {
            icon: 'po-icon-user',
            label: 'Perfil',
            url: '/loja/perfil',
        },
        {
            icon: 'po-icon-clock',
            label: 'Horário de funcionamento',
            url: '/loja/horarios-de-funcionamento',
        },
        {
            icon: 'po-icon-lock',
            label: 'Alterar senha',
            url: '/alterar-senha',
        },
        {
            icon: 'po-icon-device-desktop',
            label: 'Módulo administrativo',
            url: '/admin',
            separator: true,
            visible: this.authService.isAdmin(),
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
            link: '/loja',
        },
        {
            label: 'Anúncios',
            link: '/loja/produtos',
        },
        {
            label: 'Pedidos',
            link: '/loja/pedidos',
        },
        {
            label: 'Extrato',
            link: '/loja/extrato',
        },
        {
            label: 'Conta Bancária',
            link: '/loja/conta-bancaria',
        },
        {
            label: 'Ajuda',
            link: `https://api.whatsapp.com/send?phone=55${environment.supportPhone.replace(/[^0-9]/g, '')}&text=Ol%C3%A1%2C%20preciso%20de%20ajudar%20com%20o%20WeHoo.%20Pode%20me%20ajudar%3F`,
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
