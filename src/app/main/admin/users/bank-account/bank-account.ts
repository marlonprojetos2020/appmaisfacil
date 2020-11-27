import {Bank} from './bank';
import {BankAccountType} from './bank-account-type';

export interface BankAccount {

    bank: Bank;
    accountType: BankAccountType;
    agency: string;
    accountNumber: string;
}
