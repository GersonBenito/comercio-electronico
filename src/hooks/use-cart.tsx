import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AvailabilityStatus, ProductCategory, ProductElement, ReturnPolicy } from "@/interfaces";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

interface CartStore {
    items: ProductElement[];
    item: ProductElement;
    addItem: (product: ProductElement, stock?: number) => void;
    removeItem: (id: number | string) => void;
    removeAll: (isCheckout?: boolean) => void;
    addOnlyItem: (product: ProductElement) => void;
    increaseQuantity: (increase: number) => void;
    subtractQuantity: (subtract: number) => void;
    updateQuantity: (product: ProductElement) => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    item:{
        id: 0,
        title: '',
        description: '',
        category: ProductCategory.Beauty,
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        tags: [],
        brand: '',
        sku: '',
        weight: 0,
        dimensions: {
            width: 0,
            height: 0,
            depth: 0
        },
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: AvailabilityStatus.InStock,
        reviews: [],
        returnPolicy: ReturnPolicy.NoReturnPolicy,
        minimumOrderQuantity: 0,
        meta: {
            createdAt: new Date(),
            updatedAt: new Date(),
            barcode: '',
            qrCode: ''
        },
        images: [],
        thumbnail: ''
    },
    addItem: (product: ProductElement, stock: number = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);
        // Verificar si existe el producto en el carrito
        if(existingItem){
            set({items: [
                    ...get().items.map(item => ({
                            ...item,
                            quantity: item.id === product.id ? item?.stock + 1 : item.stock
                        }))
                    ]}); // incrementar la cantidad de productos y no agregar uno nuevo al carrito
            return toast.info('Cantidad actualizada en el carrito 🛒', {
                position: 'top-center',
                duration: 3000,
                transition: 'popUp'
            });;
        };
        set({items: [...get().items, {...product, stock: stock}]}); // agregar un nuevo producto al carrito
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
    addOnlyItem: (product: ProductElement) => {
        set({item: product});
    },
    increaseQuantity: (increase: number) => {
        set({item: {...get().item, stock: get().item.stock + increase}});
    },
    subtractQuantity: (subtract: number) => {
        set({item: {...get().item, stock: get().item.stock - subtract}});
    },
    updateQuantity: (product: ProductElement) => {
        set({items: [
            ...get().items.map(item => ({
                    ...item,
                    stock: item.id === product.id ? product?.stock : item.stock
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