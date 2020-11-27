import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../users/user';
import {PoBreadcrumb} from '@po-ui/ng-components';

@Component({
    selector: 'app-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {

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
                {label: 'Lojas', link: '/admin/lojas'},
                {label: this.user.name, link: `/lojas/${this.user.id}`},
            ],
        };
        this.title = `Loja ${this.user.name}`;
    }

    back(): void {
        this.router.navigateByUrl('/admin/lojas');
    }

    edit(): void {
        this.router.navigateByUrl(`/admin/lojas/${this.user.id}/editar`);
    }
}
