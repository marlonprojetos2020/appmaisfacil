export interface Charge {
    billingFileUrl: string;
    companyFantasyName: string;
    companyId: number;
    companyName: string;
    description: string;
    dueDate: string;
    id: number;
    proofOfPaymentUrl: string;
    status: statusType;
    statusText: string;
    type: {
        id: number;
        label: string;
    };
    value: number;
}

export enum statusType {
    NOT_FINALIZED = 'NOT_FINALIZED',
    PENDING = 'PENDING',
    PENDING_REVIEW = 'PENDING_REVIEW',
    PAID = 'PAID',
    REFUSED = 'REFUSED',
    CANCELED = 'CANCELED',
}