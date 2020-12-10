import { Address } from './address';

export interface Company {
    name: string;
    cnpj: number;
    phone: number;
    email: string;
    address: Address;
}
