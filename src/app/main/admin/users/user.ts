import {UserDetails} from '../../../core/auth/model/user-details';
import {Address} from '../../../shared/component/form/address-form/address';
import {Store} from './store';
import {BankAccount} from './bank-account/bank-account';

export interface User extends UserDetails {
    version: number;
    userExtraData: {
        phone: string;
        personType: string;
        document: string;
    };
    store: Store;
    address: Address;
    bankAccount: BankAccount,
}
