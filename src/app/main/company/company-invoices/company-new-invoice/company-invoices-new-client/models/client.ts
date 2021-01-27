export interface Client {
    name: string;
    email: string;
    document: string;
    phone: string;
    contactName: string;
    municipalInscription: string;
    stateInscription: string;
    address: {
        zipcode: string;
        street: string;
        number: string;
        neighborhood: string;
        complement: string;
        city: {
            name: string;
            stateProvince: string;
        };
    };
}
