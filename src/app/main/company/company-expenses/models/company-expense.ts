export interface CompanyExpense {
    description: string;
    type: {
        label: string;
        id: number;
    };
    value: number;
    date: string;
}
