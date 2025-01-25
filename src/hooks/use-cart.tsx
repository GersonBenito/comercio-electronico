import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from "@/interfaces";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

interface CartStore {
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (id: number | string) => void;
    removeAll: () => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);
        // Verificar si existe el producto en el carrito
        if(existingItem){
            return toast.info('Producto ya existe en el carrito', {
                position: 'top-center',
                duration: 3000,
                transition: 'popUp'
            });;
        };
        set({ items: [...get().items, product]}); // agregar un nuevo producto al carrito
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
    removeAll: () => set({items: []})
}),{
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
}));