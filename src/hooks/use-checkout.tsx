import { InputsForm } from "@/interfaces";
import { Payment, TypePayment } from "@/interfaces/type-pyment";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface CheckoutStorage {
    isValidForm: boolean;
    isValidTypePayment: boolean;
    isValidPayment: boolean;
    form: InputsForm;
    typePayment: TypePayment;
    payment: Payment;
    validFom: (value: boolean) => void;
    validTypePayment: (value: boolean) => void;
    validPayment: (value: boolean) => void;
    addItemForm: (form: InputsForm) => void;
    addItemTypePayment: (typePayment: TypePayment) => void;
    addItemPayment: (payment: Payment) => void;
}

export const useCheckout = create(persist<CheckoutStorage>((set) => ({
    isValidForm: false,
    isValidTypePayment: false,
    isValidPayment: false,
    form: {
        address: '',
        aditionalInfo: '',
        colony: '',
        country: '',
        department: '',
        email: '',
        firstName: '',
        instrunctions: '',
        lastName: '',
        municipality: '',
        phone: '',
        zipCode: ''
    },
    typePayment: {
        id: '',
        description: '',
        type: ''
    },
    payment: {
        brand: '',
        cardNumber: '',
        icon: ''
    },
    validFom: (value: boolean = false) => {
        set({isValidForm: value})
    },
    validTypePayment: (value: boolean = false) => {
        set({isValidTypePayment: value})
    },
    validPayment: (value: boolean = false) => {
        set({isValidPayment: value})
    },
    addItemForm: (form: InputsForm) => {
        set({form: form});
    },
    addItemTypePayment: (typePayment: TypePayment) => {
        set({typePayment: typePayment});
    },
    addItemPayment: (payment: Payment) => {
        set({payment: payment});
    }
}),{
    name: 'checkout-storage',
    storage: createJSONStorage(() => localStorage)
}))

