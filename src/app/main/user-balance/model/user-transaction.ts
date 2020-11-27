import {UserTransactionType} from './user-transaction-type';
import {UserTransactionReason} from './user-transaction-reason';

export interface UserTransaction {
    id: number;
    type: UserTransactionType;
    description: string;
    reason: UserTransactionReason;
    value: number;
    finalValue: number;
    consolidated: boolean;
    refund: boolean;
    createdAt: string;
}
