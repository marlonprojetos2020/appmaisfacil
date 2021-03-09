export interface Charge {
    id: number;
    description: string;
    company: {
        id: number;
    };
    statusText: string;
    billingFileUrl: any;
    proofOfPaymentUrl: any;
    type: {
        id: number;
    };
    dueDate: string;
    value: number;
    companyFantasyName: string;
    companyName: string;
}
