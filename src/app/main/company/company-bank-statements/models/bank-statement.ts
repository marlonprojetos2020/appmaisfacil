export interface BankStatement {
    id: number;
    status: any;
    statusText: string;
    bankAccount: {
        bankId: number;
        bankName: any;
        accountType: any;
        agency: number;
        accountNumber: number;
        enabled: boolean;
    };
    month: any;
    monthText: string;
    year: string;
    attachmentUrl: string;
    sentTimestamp: Date;
}
