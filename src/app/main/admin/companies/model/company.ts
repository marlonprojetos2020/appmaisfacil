import { Address } from './address';
import { CompanyType } from './company-type';

export interface Company {
    socialReason: string;
    fantasyName: string;
    cnpj: number;
    type: CompanyType;
    lineOfBusiness: string;
    socialContractUrl: string;
    cnpjUrl: string;
    cnae: string;
    phone: number;
    email: string;
    address: Address;
    plan: {
        label: string,
        value: string,
    };
}
