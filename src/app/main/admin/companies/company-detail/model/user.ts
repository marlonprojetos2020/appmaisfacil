import { Company } from './company';
import { UserDetails } from '../../../../../core/auth/model/user-details';

export interface User extends UserDetails {
    enabled: true;
    userCompany?: Company;
    userExtraData?: {
        phone: string;
        cpf: string;
    };
    version: number;

}
