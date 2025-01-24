import { Product } from "@/interfaces";

/**
 * Funcion para buscar productos por titulo, descripcion y precio
 * @param products lista de productos proporcionados para realizar la busqueda
 * @param searchText termino con el cual se realizara la busqueda
 * @returns nueva lista de productos que coincidan con el termino de busqueda
 */
export const searchProducts = (products: Product[] = [], searchText = '') => {
    return products.filter(product => product?.title?.toLowerCase().includes(searchText.toLowerCase()) 
        || product?.description?.toLowerCase().includes(searchText.toLowerCase())
        || product?.price?.toString().includes(searchText.toLowerCase()));
}