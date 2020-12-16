export interface Address {
    street: string;
    zipcode: string;
    complement: string;
    number: number;
    neighborhood: string;
    city: {
        name: string;
        stateProvince: string;
    };
    state: string;
}
