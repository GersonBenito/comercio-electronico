/**
 * Hook para conocer el estado del control, si se encuentra visible u oculto
 * para poder cambiar los estilos del navbar, cuando se muestre el control
 * se debe de ocultar el logo del navbar
 */

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ControlSearch {
    show: boolean;
    addState: (show: boolean) => void;
}
export const useControlSearch = create(persist<ControlSearch>((set, get) => ({
    show: false,
    addState: (show: boolean = true) => {
        set({ show: show });
    }
}), {
    name: 'state-control-search',
    storage: createJSONStorage(() => localStorage)
}))