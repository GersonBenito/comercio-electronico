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