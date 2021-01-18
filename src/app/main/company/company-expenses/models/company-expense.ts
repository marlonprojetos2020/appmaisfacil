export interface CompanyExpense {
    description: string;
    id: number;
    type: {
        label: string;
        id: number;
    };
    value: number;
    date: string;
}
