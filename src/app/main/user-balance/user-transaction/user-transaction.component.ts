import {Component, Input, OnInit} from '@angular/core';
import {UserTransaction} from '../model/user-transaction';
import {UserTransactionReason} from '../model/user-transaction-reason';
import {UserTransactionType} from '../model/user-transaction-type';

@Component({
    selector: 'app-user-transaction',
    templateUrl: './user-transaction.component.html',
    styleUrls: ['./user-transaction.component.scss'],
})
export class UserTransactionComponent implements OnInit {

    @Input() userTransaction: UserTransaction;

    constructor() {
    }

    ngOnInit(): void {
    }

    userTransactionReason(userTransaction: UserTransaction): string {
        return UserTransactionReason[userTransaction.reason];
    }

    isIn(userTransaction: UserTransaction): boolean {
        return userTransaction.type === UserTransactionType.IN;
    }

    isOut(userTransaction: UserTransaction): boolean {
        return userTransaction.type === UserTransactionType.OUT;
    }
}
