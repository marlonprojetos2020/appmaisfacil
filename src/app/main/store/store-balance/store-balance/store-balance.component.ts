import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb, PoPageAction} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';
import {UserBalance} from '../../../user-balance/model/user-balance';

@Component({
    selector: 'app-store-balance',
    templateUrl: './store-balance.component.html',
    styleUrls: ['./store-balance.component.scss'],
})
export class StoreBalanceComponent implements OnInit {

    userBalance: UserBalance;

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/loja'},
            {label: 'Extrato'},
        ],
    };

    readonly pageActions: Array<PoPageAction> = [
        {label: 'Sacar', url: '/loja/extrato/sacar'},
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.userBalance = this.activatedRoute.snapshot.data.userBalance;
    }

}
