export interface Charge {
    description: string;
    company: {
        id: number;
    };
    type: {
        id: number;
    };
    dueDate: string;
    value: number;
}
