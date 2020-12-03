import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
    templateUrl: './client-layout.component.html',
})
export class ClientLayoutComponent {

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
            icon: 'po-icon-exit',
            label: 'Sair',
            type: 'danger',
            separator: true,
            action: () => {
                // this.authService.logout();
                this.router.navigateByUrl('/');
            },
        },
    ];

    constructor(
        private router: Router) {

    }
}
