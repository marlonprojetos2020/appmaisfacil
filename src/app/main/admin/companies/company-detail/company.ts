export interface Company {
    name: string,
    cnpj: number,
    phone: number,
    email: string,
    address: {
        street: string,
        number: number,
        neighborhood: string,
        city: string,
        state: string,
    },
}