import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from "@/interfaces"

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
            // TODO: agregar notificacion
            const existing = {
                title: 'Producto ya existe en el carrito',
                variant: 'destructive'
            }
            console.log('existing -->', existing);
            return existing;
        };
        set({ items: [...get().items, product]}); // agregar un nuevo producto al carrito
        // TODO: agregar notificacion
        const success = {
            title: 'Producto añadido al carrito 🛒',
            variant: 'destructive'
        };
        console.log('success -->', success);
    },
    removeItem: (id: number | string) => {
        set({items: [
            ...get().items.filter(item => item.id !== id)
        ]});
        // TODO: agregar notificacion
        const deleteItem = {
            title: 'Producto eliminado del carrito 🗑️',
            variant: 'destructive'
        };
        console.log('deleteItem -->', deleteItem);
    },
    removeAll: () => set({items: []})
}),{
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
}));