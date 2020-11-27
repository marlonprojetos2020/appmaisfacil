import { ProductOrder } from './product-order';

export interface ProductOrderList {
    hasNext: boolean;
    items: ProductOrder[];
}
