import { Product } from './product';

export interface Invoice {
    items: Product[];
    client: {
        id: number;
    };
}
