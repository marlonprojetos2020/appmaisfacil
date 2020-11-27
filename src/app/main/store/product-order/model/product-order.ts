import { Product } from '../../product/model/product';

export interface ProductOrder {
    id: number;
    uuid: string;
    secretVoucher: string;
    voucher: string;
    product: Product;
    createdAt: string;
    quantity: number;
    productPriceSnapshot: number;
    productPercentageDiscountSnapshot: number;
    productPercentageCommissionSnapshot: number;
    productFinalPriceSnapshot: number;
    client: {
        name: string;
        email: string;
        phone: string;
        document: string;
        responsibleName: string
    };
    paymentStatus: string;
    refundedStock: boolean;
    delivered: boolean;
    totalPrice: number;
    clientEmail: string;
    clientDocument: string;
    clientPhone: string;
    clientName: string;
    clientResponsibleName: string;
}
