import {Component, Input, OnInit} from '@angular/core';

import {PoBreadcrumb, PoPageAction} from '@po-ui/ng-components';
import {UserBalance} from '../model/user-balance';
import {CurrencyPipe} from '@angular/common';

@Component({
    selector: 'app-user-balance',
    templateUrl: './user-balance.component.html',
    styleUrls: ['./user-balance.component.scss'],
})
export class UserBalanceComponent implements OnInit {

    @Input() readonly pageActions: Array<PoPageAction> = [];
    @Input() readonly breadcrumb: PoBreadcrumb;

    @Input() userBalance: UserBalance;
    title: string;

    constructor(
        private currencyPipe: CurrencyPipe,
    ) {
    }

    ngOnInit(): void {
        this.title = `Extrato: ${this.currencyPipe.transform(this.userBalance.balance)}`;
    }
}
