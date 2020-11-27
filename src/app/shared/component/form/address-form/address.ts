import {City} from './city';

export interface Address {
    zipcode: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    city: City;
}
