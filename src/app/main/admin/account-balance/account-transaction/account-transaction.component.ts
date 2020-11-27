import {Component, Input, OnInit} from '@angular/core';
import {AccountTransaction} from '../model/account-transaction';
import {AccountTransactionReason} from '../model/account-transaction-reason';
import {AccountTransactionType} from '../model/account-transaction-type';
import {CurrencyPipe} from '@angular/common';

@Component({
    selector: 'app-account-transaction',
    templateUrl: './account-transaction.component.html',
    styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

    @Input() accountTransaction: AccountTransaction;
    amountDescription: string;

    constructor(
        private currencyPipe: CurrencyPipe,
    ) {
    }

    ngOnInit(): void {
        this.amountDescription =
            `Taxa: ${this.currencyPipe.transform(this.accountTransaction.tax)}`;
    }

    accountTransactionReason(accountTransaction: AccountTransaction): string {
        return AccountTransactionReason[accountTransaction.reason];
    }

    isIn(accountTransaction: AccountTransaction): boolean {
        return accountTransaction.type === AccountTransactionType.IN;
    }

    isOut(accountTransaction: AccountTransaction): boolean {
        return accountTransaction.type === AccountTransactionType.OUT;
    }

}
