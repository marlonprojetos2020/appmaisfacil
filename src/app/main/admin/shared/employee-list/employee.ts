export interface Employee {
    id: number;
    status: statusType;
    statusText: string;
    name: string;
    category: string;
    admissionAt: Date;
    companyId: number;
    companyName: string;
    companyFantasyName: string;
    admissionFileUrl: string;
    firedFileUrl: string;
}

export enum statusType {
    FIRED = 'FIRED',
    NOT_FINALIZED = 'NOT_FINALIZED',
    PENDING_FIRED = 'PENDING_FIRED',
    PENDING_HIRED = 'PENDING_HIRED',
    REFUSED = 'REFUSED',
    HIRED = 'HIRED',
}