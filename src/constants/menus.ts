import { LinkMenu } from "@/interfaces";

export const CATEGORY_MENU: LinkMenu[] = [
    { label: 'Belleza', url: '/category/beauty' },
    { label: 'Perfumes', url: '/category/fragrances' },
    { label: 'Laptops', url: '/category/laptops' },
    { label: 'Smartphones', url: '/category/smartphones' },
];

export const MAIN_MENU: LinkMenu[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Tienda', url: '/products' },
    { label: 'Categorías', url: '/products', children: CATEGORY_MENU },
];

export const flattenMenuLinks = (links: LinkMenu[]): LinkMenu[] => {
    return links.flatMap((link) => (
        link.children?.length ? link.children : [link]
    ));
};

export const MENU_HELP: LinkMenu[] = [
    { label: 'Opciones de pago', url: '/' },
    { label: 'Reembolsos', url: '/' },
    { label: 'Politicas de privacida', url: '/' }
];

export const PAGE_NO_SEARCH = {
    checkout: '/checkout',
    address: '/checkout/address',
    purchase: '/checkout/successful-purchase'
};