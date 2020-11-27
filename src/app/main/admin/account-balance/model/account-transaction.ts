import {AccountTransactionType} from './account-transaction-type';
import {AccountTransactionReason} from './account-transaction-reason';

export interface AccountTransaction {
    id: number;
    type: AccountTransactionType;
    description: string;
    reason: AccountTransactionReason;
    amount: number;
    tax: number;
    weHooTax: number;
    totalAmount: number;
    refund: boolean;
    createdAt: string;
}
