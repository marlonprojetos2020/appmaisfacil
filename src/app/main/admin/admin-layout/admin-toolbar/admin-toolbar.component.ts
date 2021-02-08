import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
    templateUrl: 'admin-toolbar.component.html',
})
export class AdminToolbarComponent {
    id = null;
    subscription: Subscription;

    pProfile: PoToolbarProfile;
    profileActions: Array<PoToolbarAction> = [
        {
            icon: 'po-icon-user',
            label: 'Minha Conta',
            url: 'admin/minha-conta',
        },
        {
            icon: 'po-icon-lock',
            label: 'Alterar senha',
            url: '/alterar-senha',
        },
        {
            icon: 'po-icon-device-desktop',
            label: 'Acessar como Empresa',
            url: '/empresa',
            visible: this.authService.isCompany(),
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

    constructor(private router: Router, private authService: AuthService) {}
}
