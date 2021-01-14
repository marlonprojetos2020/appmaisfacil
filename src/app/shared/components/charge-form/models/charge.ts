export interface Charge {
    id: number;
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
