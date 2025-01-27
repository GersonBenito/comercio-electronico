import { Payment, TypePayment } from "./type-pyment";

export interface CheckOut {
    form: InputsForm,
    typePayment: TypePayment;
    payment: Payment;
};

export interface InputsForm {
    firstName: string;
    lastName: string;
    country: string;
    department: string;
    municipality: string;
    colony: string;
    address: string;
    zipCode: string;
    phone: string;
    email: string;
    aditionalInfo: string;
    instrunctions: string;
};

export type Inputs = {
    firstName: string;
    lastName: string;
    country: string;
    department: string;
    municipality: string;
    colony: string;
    address: string;
    zipCode: string;
    phone: string;
    email: string;
    aditionalInfo: string;
    instrunctions: string;
};