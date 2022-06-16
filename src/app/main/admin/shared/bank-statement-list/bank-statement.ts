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
    bankAccountCompanyId: number;
    bankAccountCompanyName: string;
    bankAccountCompanyFantasyName: string;
    month: any;
    monthText: string;
    year: string;
    attachmentUrl: string;
    sentTimestamp: Date;
}