import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {ActivatedRoute, Router} from '@angular/router';
import {UserBalance} from '../../../user-balance/model/user-balance';
import {BankAccount} from '../../../admin/users/bank-account/bank-account';

@Component({
    selector: 'app-store-withdraw',
    templateUrl: './store-withdraw.component.html',
    styleUrls: ['./store-withdraw.component.scss'],
})
export class StoreWithdrawComponent implements OnInit {

    userBalance: UserBalance;
    bankAccount: BankAccount;

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/loja'},
            {label: 'Extrato', link: '/loja/extrato'},
            {label: 'Saque'},
        ],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.userBalance = this.activatedRoute.snapshot.data.userBalance;
        this.bankAccount = this.activatedRoute.snapshot.data.user.bankAccount;
        if (!this.bankAccount) {
            this.router.navigateByUrl('/loja/conta-bancaria');
        }
    }

}
