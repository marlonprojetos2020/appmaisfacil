export enum UserTransactionReason {
    PRODUCT_ORDER = 'Pedido',
    PRODUCT_ORDER_COMMISSION = 'Comissão',
    USER_WITHDRAW = 'Saque',
    REFUND = 'Extorno',
    ADMIN_CASH_OUT = 'Removido pelo admin',
    ADMIN_CASH_IN = 'Adicionado pelo admin',
    SYSTEM_CASH_OUT = 'Removido pelo sistema',
    SYSTEM_CASH_IN = 'Adicionado pelo sistema',
}
