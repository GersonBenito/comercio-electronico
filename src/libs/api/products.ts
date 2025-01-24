import { Product } from "@/interfaces";

/**
 *  Tipos de cache en Next
 *  cache: "force-cache": Equivalente a getStaticProps (datos estáticos)
    cache: "no-store": Equivalente a getServerSideProps (datos dinámicos)
 */

const API_URL = process.env.API_URL; // obtener la url base de las variables de entorno

/**
 * Funcion para obtener todos los productos
 * @returns Promersa con una lista de productos
 */
export const getAllProducts = async (): Promise<Product[]> => {
    // Fetch de datos con caching estatico
    const url = `${API_URL}/products`; 
    // Uso de fetch nativo de JavaScript
    const response = await fetch(url, { cache: 'force-cache'});
    return await response.json(); // convertir o parsear la data a json
}

/**
 * Funcion para obtener una cantidad limitado de productos (paginado)
 * @param limit cantidad de productos o items a obtener
 * @returns Promersa con una lista de productos
 */
export const getProductsByLimit = async (limit: string | number): Promise<Product[]> => {
    // Fetch de datos con caching estatico
    const url = `${API_URL}/products/?limit=${limit}`;
    const response = await fetch(url, { cache: 'force-cache'});
    return await response.json();
}

/**
 * Funcion para obtene los productos en base a una categoria en especifico
 * @param category categoria de los productos a obtener
 * @returns Promesa con lista de productos pertenecientes a una categoria en especifico
 */
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
    const url = `${API_URL}/products/category/${category}`;
    const response = await fetch(url, { cache: 'force-cache' });
    return await response.json();
}

/**
 * Funcion para obteber los detalles de un producto por id
 * @param id del producto a obtener
 * @returns Promesa con un solo producto
 */
export const getProductById = async (id: string | number): Promise<Product> => {
    const url = `${API_URL}/products/${id}`;
    // cambiamos a cache: 'no-store' debido a que el producto sera dinamico
    // de acorde al numero de id
    const response = await fetch(url, { cache: 'no-store' });
    return await response.json();
}

/**
 * Funcion para obtener las categorias de los productos
 * @returns Promesa con una lista de string
 */
export const getAllCategories = async (): Promise<string[]> => {
    const url = `${API_URL}/products/categories`;
    const response = await fetch(url, { cache: 'force-cache' }); 
    return await response.json();
}
