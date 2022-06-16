export interface Expense {
    id: number;
    type: {
        id: number;
        label: string;
    };
    value: number;
    date: string;
    description: string;
    proofOfPaymentUrl: string;
}
