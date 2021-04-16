export interface Address {
    addressType: {
        label: string,
        value: string,
    };
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
