import { z } from 'zod';

const regexText = /^[a-zA-Z ]/g;

/**
    Zod nos permite validar formaularios de una forma rapido, 
    complementado con react-hook-form,validaciones comunes agregado
 * 
 */
export const addressSchema = z.object({
    firstName: z.string()
        .regex(regexText, {
            message: 'El nombre debe de ser texto'
        })
        .min(3, {
            message: 'El nombre debe de contener minimo 3 caracteres'
        }),
    lastName: z
        .string()
        .regex(regexText, {
            message: 'El apellido debe de ser texto'
        })
        .min(3, {
            message: 'El apellido debe de contener minimo 3 caracteres'
        }),
    country: z
        .string()
        .regex(regexText, {
            message: 'Selecciona un país'
        }),
    department: z
        .string()
        .regex(regexText, {
            message: 'Selecciona un depertamento'
        }),
    municipality: z
        .string()
        .regex(regexText, {
            message: 'Selecciona un municipio'
        }),
    colony: z
        .string()
        .min(3, {
            message: 'La colonia debe de contener minimo 3 caracteres'
        }),
    address: z
        .string()
        .min(3, {
            message: 'Ingrese una direccion'
        }),
    zipCode: z.string().refine(zipCode => !isNaN(parseInt(zipCode)), {
        message: 'El codigo postal debe de ser numero'
    }),
    phone: z.string().refine(phone => !isNaN(parseInt(phone)), {
        message: 'El numero debe de ser numero'
    }),
    email: z.string().email({
        message: 'Un correo valido debe de incluir @ y .'
    }),
    aditionalInfo: z.string().optional(),
    instrunctions: z.string().optional(),
});