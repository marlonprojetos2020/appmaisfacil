import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb, PoPageAction} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';
import {UserBalance} from '../../../user-balance/model/user-balance';

@Component({
    selector: 'app-store-balance',
    templateUrl: './seller-balance.component.html',
    styleUrls: ['./seller-balance.component.scss'],
})
export class SellerBalanceComponent implements OnInit {

    userBalance: UserBalance;

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/vendedor'},
            {label: 'Extrato'},
        ],
    };

    readonly pageActions: Array<PoPageAction> = [
        {label: 'Sacar', url: '/vendedor/extrato/sacar'},
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.userBalance = this.activatedRoute.snapshot.data.userBalance;
    }

}
