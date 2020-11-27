import { Product } from './product';

export interface ProductList {
    hasNext: boolean;
    items: Product[];
}
