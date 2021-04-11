import { AccountType } from './AccountType';

export interface BankAccount {
    bankId: number;
    accountType: AccountType;
    agency: string;
    accountNumber: string;
}
