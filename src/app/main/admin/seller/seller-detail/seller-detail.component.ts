import { Component, OnInit } from '@angular/core';
import {User} from '../../users/user';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.scss']
})
export class SellerDetailComponent implements OnInit {

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
                {label: 'Vendedores', link: '/admin/vendedores'},
                {label: this.user.name, link: `/vendedores/${this.user.id}`},
            ],
        };
        this.title = `Vendedor ${this.user.name}`;
    }

    back(): void {
        this.router.navigateByUrl('/admin/vendedores');
    }

    edit(): void {
        this.router.navigateByUrl(`/admin/vendedores/${this.user.id}/editar`);
    }
}
