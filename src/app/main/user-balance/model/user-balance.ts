import {UserTransaction} from './user-transaction';

export interface UserBalance {
    balance: number;
    userTransactions: UserTransaction[];
}
