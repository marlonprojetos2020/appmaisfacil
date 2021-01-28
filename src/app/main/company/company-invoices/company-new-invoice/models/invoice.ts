export interface Invoice {
    items: {
        title: string;
        quantity: number;
        amount: number;
    };
    client: {
        id: number;
    };
}
