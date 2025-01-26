import { LinkMenu } from "@/interfaces";

export const MAIN_MENU: LinkMenu[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Tienda', url: '/products' },
    { label: 'Electrónica', url: '/category/electronics' },
    { label: 'Joyería', url: '/category/jewelery' },
    { label: 'Ropa de hombre', url: '/category/men\'s clothing' },
    { label: 'Ropa de mujer', url: '/category/women\'s clothing' },
];

export const MENU_HELP: LinkMenu[] = [
    { label: 'Opciones de pago', url: '/' },
    { label: 'Reembolsos', url: '/' },
    { label: 'Politicas de privacida', url: '/' }
];

export const PAGE_NO_SEARCH = {
    checkout: '/checkout',
    address: '/checkout/address',
    purchase: '/checkout/successful-purchase'
}