import {Address} from './address';

export class AddressToString {

    public static convert(address: Address): string {
        return `${address.street}, ${address.number}. ${address.neighborhood}. ${address.complement ? `${address.complement}. ` : ''}${address.city.name}, ${address.city.stateProvince}. ${address.zipcode}.`;
    }
}
