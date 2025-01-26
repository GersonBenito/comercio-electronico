import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from "@/interfaces";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

interface CartStore {
    items: Product[];
    item: Product;
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (id: number | string) => void;
    removeAll: (isCheckout?: boolean) => void;
    addOnlyItem: (product: Product) => void;
    increaseQuantity: (increase: number) => void;
    subtractQuantity: (subtract: number) => void;
    updateQuantity: (product: Product) => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    item:{
        id: 0,
        title: '',
        description: '',
        image: '',
        price: 0,
        rating: {
            count: 0,
            rate: 0
        },
        category: '',
        quantity: 0
    },
    addItem: (product: Product, quantity: number = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);
        // Verificar si existe el producto en el carrito
        if(existingItem){
            set({items: [
                    ...get().items.map(item => ({
                            ...item,
                            quantity: item.id === product.id ? item?.quantity + 1 : item.quantity
                        }))
                    ]}); // incrementar la cantidad de productos y no agregar uno nuevo al carrito
            return toast.info('Cantidad actualizada en el carrito 🛒', {
                position: 'top-center',
                duration: 3000,
                transition: 'popUp'
            });;
        };
        set({items: [...get().items, {...product, quantity: quantity}]}); // agregar un nuevo producto al carrito
        toast.success('Producto añadido al carrito 🛒', {
            position: 'top-center',
            duration: 3000,
            transition: 'popUp'
        });
    },
    removeItem: (id: number | string) => {
        set({items: [
            ...get().items.filter(item => item.id !== id)
        ]});
        toast.warning('Producto eliminado del carrito 🗑️', {
            position: 'top-center',
            duration: 3000,
            transition: 'popUp'
        });
    },
    removeAll: (isCheckout: boolean = false) => {
        set({items: []});
        /**
         * Mostrar la notificacion de productos removidos del carrito
         * solo si el usuario no esta en la pantalla de checkout
         * debido a que al realizar la compra todos los prodcutos del carrito
         * se deben de remover de forma transparente
         */
        if(isCheckout){
            return false;
        }
        toast.warning('Productos eliminados del carrito 🗑️', {
            position: 'top-center',
            duration: 3000,
            transition: 'popUp'
        });
    },
    addOnlyItem: (product: Product) => {
        set({item: product});
    },
    increaseQuantity: (increase: number) => {
        set({item: {...get().item, quantity: get().item.quantity + increase}});
    },
    subtractQuantity: (subtract: number) => {
        set({item: {...get().item, quantity: get().item.quantity - subtract}});
    },
    updateQuantity: (product: Product) => {
        set({items: [
            ...get().items.map(item => ({
                    ...item,
                    quantity: item.id === product.id ? product?.quantity : item.quantity
                }))
            ]}); // Actualizar la cantidad unicamente producto sin modificar algun otro estado
        return toast.info('Cantidad actualizada en el carrito 🛒', {
            position: 'top-center',
            duration: 3000,
            transition: 'popUp'
        });;
    }
}),{
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
}));