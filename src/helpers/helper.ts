import { Product } from "@/interfaces";

/**
 * Funcion para transformar un numero u monto en formato de moneda
 * @param value monto o valor a transformar
 * @param locale tipo de locale a transformar, por defecto cuenta con en-US 
 * @param currency tipo moneda a usar o transformar, por defecto es USD
 * @returns monto transformado, ejemplo: $1000.00
 */
export const transformAmount = (value: number | string, locale = 'en-US', currency = 'USD'): string => {
    // Doble verificacion para el value recibido, debido a que los montos 
    // por lo general se maneja en formato numerico y string, de acorde al API o Service
    const amount = parseFloat(`${value}`) || 0; 
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
    });
    return formatter.format(amount);
}

/**
 * Funcion para obtener el año actual
 * @returns retorn el año actual
 */
export const getYear = (): number =>{
    const date = new Date();
    return date.getFullYear();
}

/**
 * Funcion para reemplazar caracteres especiales y numeros
 * @param value datos al que se le hara el replace
 * @returns nuevo valor sin caracteres especiales y numeros
 */
export const replaceCharactersAndNumbers = (value: string): string => {
    const regex =  /[^a-zA-Z]/g;
    return value.replace(regex,'');
}

/**
 * Funcion para desordenar elementos de un arreglo
 * @param products lista de productos recibido
 * @returns lista de desordenada de productos
 */
export const shuffleArray = (products: Product[]): Product[] =>{
    for(let i = products.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (1 + 1));
        [products[i], products[j]] = [products[j], products[i]]; // intercambio de elementos en el arreglo
    }
    return products;
}

/**
 * Funcion para truncar decimales sin aproximarlo
 * @param number numero con decimal al que se quiere truncar
 * @param decimals cantida de decimales a remover, por defecto es 0
 * @returns numero con decimales truncados
 */
export const truncateToFixed = (number: number, decimals: number = 0): number => {
    const factor = Math.pow(10, decimals);
    const truncateNumber = (Math.trunc(number * factor) / factor).toFixed(decimals);
    return parseFloat(truncateNumber);
}

/**
 * Funcion para sumar el precio de cada producto del arreglo
 * @param products lista de productos del cual se realizara la suma de los precios 
 * @returns precio toal de los productos del arreglo
 */
export const getTotalPrice = (products: Product[]): number => {
    return products.reduce((accumulator, product) => (accumulator + (product.price * product.quantity)), 0)
};

/**
 * Funcion para ofuscar los primeros digitos
 * @param cardNumber numero de tarjeta o cuenta
 * @returns nuevo string con los primeros digitos ofuscados
 */
export const obfuscateNumbers = (cardNumber: string | number): string =>{
    const cardStr = cardNumber.toString(); // convertir el numero en string para obtener el length
    if(cardStr && cardStr.length > 4){
        // Ofuscar los primeros digitos de la cadena
        const obfuscated = '*'.repeat(cardStr.length - 4) + cardStr.slice(-4);
        return obfuscated;
    }
    console.log('El numero de tarjeta debe de tener almenos 4 digitos');
    return '';
}
