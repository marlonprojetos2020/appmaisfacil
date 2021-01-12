import { AccountType } from "./AccountType";

export interface BankAccount {
    id: number,
    bankId: number,
    bankName: string,
    accountType: AccountType,
    agency: string,
    accountNumber: string
}
