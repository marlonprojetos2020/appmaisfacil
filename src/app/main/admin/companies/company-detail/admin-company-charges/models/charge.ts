import { CompanyCharge } from './companyCharge';

export interface Charge extends CompanyCharge {
    description: string;
    company: {
        id: number;
    };
    type: {
        id: number;
    };
    dueDate: string;
    value: number;
}
