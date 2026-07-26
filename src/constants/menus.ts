import { LinkMenu } from "@/interfaces";

// TODO: Seperating main manu to include every single category from API
export const MAIN_MENU: LinkMenu[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Tienda', url: '/products' },
    { label: 'Belleza', url: '/category/beauty' },
    { label: 'Perfumes', url: '/category/fragrances' },
    { label: 'Laptops', url: '/category/laptops' },
    { label: 'Smartphones', url: '/category/smartphones' },
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