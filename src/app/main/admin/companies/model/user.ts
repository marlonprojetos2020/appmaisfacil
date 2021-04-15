import { Company } from './company';
import { UserDetails } from 'src/app/core/auth/model/user-details';

export interface User extends UserDetails {
    enabled: true;
    userCompany?: Company;
    userExtraData?: {
        phone: string;
        cpf: string;
    };
    plan: {
        label: string
        value: string
    }
    version: number;
}


export enum PlanEnum {
    PREMIUM = 'PREMIUM',
    BASIC = 'BASIC',
}