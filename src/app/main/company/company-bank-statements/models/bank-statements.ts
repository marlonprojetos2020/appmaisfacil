export interface BankStatement {
    id: number;
    status: string;
    bankAccount: {
        id: number;
        bankId: number;
        bankName: string;
        accountType: string;
        agency: string;
        accountNumber: string;
    };
    month: string;
    year: number;
    attachmerntUrl: string;
    sentTimestamp: string;
}
