export interface Invoice {
    id: number;
    status: statusType;
    statusText: string;
    companyId: number;
    companyName: string;
    companyFantasyName: string;
    items: [
        {
            id: number;
            title: string;
            quantity: number;
            amount: number;
        }
    ],
    totalAmount: number;
    client:
    {
        _messages: [],
        id: number;
        name: string;
        email: string;
        document: string;
        phone: string;
        contactName: string;
        municipalInscription: string;
        stateInscription: string;
        address: {
            zipcode: number;
            street: string;
            number: string;
            neighborhood: string;
            complement: string;
            city: {
                name: string;
                stateProvince: string;
            }
        }
    },
    emissionAt: Date;
    attachmentUrl: string;
}


export enum statusType {
    PROCESSING = 'PROCESSANDO',
    CANCELED = 'CANCELED',
    WAITING_CANCELEMENT = 'WAITING_CANCELEMENT',
    OK = 'OK',
}