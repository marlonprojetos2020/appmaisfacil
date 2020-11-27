import {UserTransactionType} from '../../user-balance/model/user-transaction-type';
import {UserTransactionReason} from '../../user-balance/model/user-transaction-reason';
import {BankAccount} from '../users/bank-account/bank-account';

export interface UserWithdraw {
    id: number;
    type: UserTransactionType;
    description: string;
    reason: UserTransactionReason;
    value: number;
    finalValue: number;
    consolidated: boolean;
    refund: boolean;
    createdAt: string;
    user: {
        id: string,
        name: string,
        email: string,
        bankAccount: BankAccount;
    };
}
