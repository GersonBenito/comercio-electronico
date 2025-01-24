export interface TypePayment {
    id: number | string;
    type: string, 
    description: string
}

export interface Payment {
    brand: string;
    icon: string;
    cardNumber: string;
}