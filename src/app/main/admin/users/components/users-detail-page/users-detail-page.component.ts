import {Component, OnInit} from '@angular/core';
import {User} from '../../user';
import {ActivatedRoute, Router} from '@angular/router';
import {PoBreadcrumb} from '@po-ui/ng-components';

@Component({
    selector: 'app-users-detail-page',
    templateUrl: './users-detail-page.component.html',
    styleUrls: ['./users-detail-page.component.scss']
})
export class UsersDetailPageComponent implements OnInit {

    user: User;
    breadcrumb: PoBreadcrumb;
    title: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.user = this.activatedRoute.snapshot.data.user;
        this.breadcrumb = {
            items: [
                {label: 'Dashboard', link: '/admin'},
                {label: 'Usuários', link: '/admin/usuarios'},
                {label: this.user.name},
            ],
        };
        this.title = `Usuário ${this.user.name}`;
    }

    back(): void {
        this.router.navigateByUrl('/admin/usuarios');
    }

    edit(): void {
        this.router.navigateByUrl(`/admin/usuarios/${this.user.id}/editar`);
    }
}
