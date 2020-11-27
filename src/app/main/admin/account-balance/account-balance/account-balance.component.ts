import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb, PoPageAction} from '@po-ui/ng-components';
import {AccountBalance} from '../model/account-balance';
import {ActivatedRoute} from '@angular/router';
import {CurrencyPipe} from '@angular/common';

@Component({
    selector: 'app-account-balance',
    templateUrl: './account-balance.component.html',
    styleUrls: ['./account-balance.component.scss'],
})
export class AccountBalanceComponent implements OnInit {

    title: string;
    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Extrato'},
        ],
    };
    pageActions: PoPageAction[] = [];

    accountBalance: AccountBalance;

    constructor(
        private activatedRoute: ActivatedRoute,
        private currencyPipe: CurrencyPipe,
    ) {
    }

    ngOnInit(): void {
        this.accountBalance = this.activatedRoute.snapshot.data.accountBalance;

        this.title = `Extrato: ${this.currencyPipe.transform(this.accountBalance.balance)}`;
    }

}
