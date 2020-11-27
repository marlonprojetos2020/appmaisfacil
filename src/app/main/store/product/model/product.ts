import {ProductPhoto} from '../product-photos/product-photo';

export interface Product {
    id: number;
    version: number;
    title: string;
    price: number;
    percentageDiscount: number;
    percentageCommission: number;
    totalAmount: number;
    soldAmount: number;
    startDateTime: string;
    endDateTime: string;
    description: string;
    productPhotos: ProductPhoto[];
    registrationCompleted: boolean;
    enabled: boolean;

    moneyDiscount: number;
    storeUserPhotoSm: string;
    storeName: string;
    moneyCommission: number;
    finalPrice: number;
    availableAmount: number;
    upToDate: boolean;
    outOfDate: boolean;
    outOfStock: boolean;
    readyForSale: boolean;
}
