import { Product } from "@/interfaces";

/**
 *  Tipos de cache en Next
 *  cache: "force-cache": Equivalente a getStaticProps (datos estáticos)
    cache: "no-store": Equivalente a getServerSideProps (datos dinámicos)
 */

const API_URL = process.env.API_URL; // obtener la url base de las variables de entorno

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

/**
 * Funcion generica para consumir los servicios de la API
 * @param endpoint al que se necesita consumir, ejemplo: products/category
 * @returns lista de productos del servicio
 */
export const getProducts = async (endpoint: string): Promise<Product[]> => {
    // En caso de querer probar los Suspense de react descomentar esta linea de abajo
    // await new Promise((resolve)=> setTimeout(resolve, 5000))

    // Fetch de datos con caching estatico
    const url = `${API_URL}/${endpoint}`; 
    // Uso de fetch nativo de JavaScript
    const response = await fetch(url, { cache: 'force-cache'});
    return await response.json(); // convertir o parsear la data a json
}