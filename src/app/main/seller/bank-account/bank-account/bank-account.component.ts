import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';
import {BankAccount} from '../../../admin/users/bank-account/bank-account';

@Component({
    selector: 'app-bank-account',
    templateUrl: './bank-account.component.html',
    styleUrls: ['./bank-account.component.scss'],
})
export class BankAccountComponent implements OnInit {

    bankAccount: BankAccount;

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/vendedor'},
            {label: 'Conta Bancária'},
        ],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.bankAccount = this.activatedRoute.snapshot.data.user.bankAccount;
    }

}
