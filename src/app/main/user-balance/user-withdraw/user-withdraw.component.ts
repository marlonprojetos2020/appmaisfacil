import {Component, Input, OnInit} from '@angular/core';
import {PoBreadcrumb, PoNotificationService} from '@po-ui/ng-components';
import {ActivatedRoute, Router} from '@angular/router';
import {UserBalance} from '../model/user-balance';
import {FormComponent} from '../../../shared/component/form/form-component';
import {UserWithdraw} from '../model/user-withdraw';
import {FormBuilder, Validators} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';
import {UserBalanceService} from '../user-balance.service';
import {BankAccount} from '../../admin/users/bank-account/bank-account';

@Component({
    selector: 'app-user-withdraw',
    templateUrl: './user-withdraw.component.html',
    styleUrls: ['./user-withdraw.component.scss'],
})
export class UserWithdrawComponent extends FormComponent<UserWithdraw> implements OnInit {

    @Input() breadcrumb: PoBreadcrumb;
    @Input() userBalance: UserBalance;

    @Input() bankAccount: BankAccount;

    loading = false;
    helpValue: string;
    userBalanceTitle: string;
    bankAccountMessage: string;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private formBuilder: FormBuilder,
        private currencyPipe: CurrencyPipe,
        private userBalanceService: UserBalanceService,
    ) {
        super(router, activatedRoute, notificationService);
    }

    ngOnInit(): void {
        super.ngOnInit();

        this.helpValue = `Valor mínimo de R$ 50,00`;
        this.userBalanceTitle = `Extrato: ${this.currencyPipe.transform(this.userBalance.balance)}`;

        this.saveService = this.userBalanceService.requestWithdraw.bind(this.userBalanceService);

        this.bankAccountMessage = `O valor sacado será depositado em breve na conta ${this.bankAccount.accountType.toLowerCase()}: ${this.bankAccount.bank.name} - Agência ${this.bankAccount.agency}, Conta ${this.bankAccount.accountNumber}`;
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            value: ['', [Validators.required, Validators.min(50), Validators.max(this.userBalance.balance)]],
        });
    }

    getUserWithdraw(): UserWithdraw {
        return this.form.getRawValue();
    }
}
