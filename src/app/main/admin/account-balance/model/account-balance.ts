import {AccountTransaction} from './account-transaction';

export interface AccountBalance {
    balance: number;
    accountTransactions: AccountTransaction[];
}
