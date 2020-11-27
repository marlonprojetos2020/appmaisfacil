import {Component, Input, OnInit} from '@angular/core';
import {PoBreadcrumb, PoComboFilterMode, PoNotificationService, PoRadioGroupOption, PoSelectOption} from '@po-ui/ng-components';
import {FormComponent} from '../../../shared/component/form/form-component';
import {BankAccount} from '../../admin/users/bank-account/bank-account';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {BankAccountType} from '../../admin/users/bank-account/bank-account-type';
import {BankAccountService} from '../bank-account.service';

@Component({
    selector: 'app-user-bank-account',
    templateUrl: './user-bank-account.component.html',
    styleUrls: ['./user-bank-account.component.scss'],
})
export class UserBankAccountComponent extends FormComponent<BankAccount> implements OnInit {

    @Input() breadcrumb: PoBreadcrumb;
    @Input() bankAccount;

    banksOptions: PoSelectOption[];
    bankFilterMode: PoComboFilterMode = PoComboFilterMode.contains;

    accountTypesOptions: PoRadioGroupOption[];

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private formBuilder: FormBuilder,
        private bankAccountService: BankAccountService,
    ) {
        super(router, activatedRoute, notificationService);
    }

    ngOnInit(): void {
        if (!this.bankAccount) {
            this.bankAccount = {} as BankAccount;
        }

        super.ngOnInit();

        this.banksOptions = this.activatedRoute.snapshot.data.banks.map(
            bank => ({label: `${bank.id} - ${bank.name}`, value: bank.id}),
        );

        this.accountTypesOptions = Object.keys(BankAccountType).map(
            bankAccountType => ({label: BankAccountType[bankAccountType], value: bankAccountType}),
        );

        if (!this.saveService) {
            this.saveService = this.bankAccountService.updateBankAccount.bind(this.bankAccountService);
        }
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            bank: this.formBuilder.group({
                id: [this.bankAccount.bank && this.bankAccount.bank.id],
            }),
            accountType: [this.bankAccount.accountType, [Validators.required]],
            agency: [this.bankAccount.agency, [Validators.required, Validators.pattern(/\d{4}/)]],
            accountNumber: [this.bankAccount.accountNumber, [Validators.required, Validators.minLength(2)]],
        });
    }

    getBankAccount(): BankAccount {
        return this.form.getRawValue();
    }
}
