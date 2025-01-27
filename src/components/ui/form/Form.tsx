'use client';

import { font } from "@/config/font";
import styles from "./form.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "@/validations/address-scheme";
import { Inputs } from "@/interfaces/checkout.interface";
import { useCart, useCheckout } from "@/hooks";
import { useEffect } from "react";

interface Props {
    className?: string;
    classCenter?: string; 
    styleTitle?: string;
    showButtonForm?: boolean;
}

export default function Form({className, classCenter, styleTitle, showButtonForm = false}:Props){

    const { removeAll } = useCart();
    const { validFom, addItemForm } = useCheckout();

    const { 
        register, 
        handleSubmit, 
        formState: {errors, isValid}, 
        watch 
    } = useForm<Inputs>({resolver: zodResolver(addressSchema)});

    useEffect(() => {
        if(isValid){
            validFom(true);
            addItemForm(watch());
        }else{
            validFom(false);
        }
    }, [isValid]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if(isValid){
            // Enviar data al servidor o estado del aplicativo
            console.log(data);
            // Remover los productos del carrito
            removeAll(true);
        }
        // En caso de que el formulario este vacio realizar otra accion
    }
  return (
    <div className={`${font.className} ${styles.wrapper_form} ${className}`}>
        <div className={`${styleTitle} mb-2`}>
            <h2>Detalles de facturación</h2>
        </div>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <div className={`
            ${styles.inline} 
            ${classCenter} 
            row
            gap-0
            gap-sm-0
            gap-md-0
            gap-lg-0
            gap-xl-4
            gap-xxl-4
        `}>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="firstName" className="regular-body">Nombres</label>
                <input 
                    type="text" 
                    placeholder="Ingresar" 
                    {...register('firstName')} 
                    id="firstName"
                    className={errors.firstName?.message && styles.error}
                />
                {errors.firstName?.message && <span>{errors.firstName.message}</span>}
            </div>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="lastName" className="regular-body">Apellidos</label>
                <input 
                    type="text" 
                    placeholder="Ingresar" 
                    {...register('lastName')} 
                    id="lastName" 
                    className={errors.lastName?.message && styles.error}
                />
                {errors.lastName?.message && <span>{errors.lastName.message}</span>}
            </div>
        </div>
        <div className={`
            ${styles.inline} 
            ${classCenter}
            row
            gap-0
            gap-sm-0
            gap-md-0
            gap-lg-0
            gap-xl-4
            gap-xxl-4
        `}>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="country" className="regular-body">País</label>
                <select {...register('country')} id="country" className={errors.country?.message && styles.error}>
                    <option value="">Seleccionar</option>
                    <option value="El Salvador">El Salvador</option>
                </select>
                {errors.country?.message && <span>{errors.country.message}</span>}
            </div>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="department" className="regular-body">Departamento</label>
                <select {...register('department')} id="department" className={errors.department?.message && styles.error}>
                    <option value="">Seleccionar</option>
                    <option value="La Libertad">La Libertad</option>
                </select>
                {errors.department?.message && <span>{errors.department.message}</span>}
            </div>
        </div>
        <div className={`
            ${styles.inline} 
            ${classCenter}
            row
            gap-0
            gap-sm-0
            gap-md-0
            gap-lg-0
            gap-xl-4
            gap-xxl-4
        `}>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="municipality" className="regular-body">Municipio</label>
                <select {...register('municipality')} id="municipality" className={errors.municipality?.message && styles.error}>
                    <option value="">Seleccionar</option>
                    <option value="Santa Tecla">Santa Tecla</option>
                </select>
                {errors.municipality?.message && <span>{errors.municipality.message}</span>}
            </div>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="colony" className="regular-body">Colonia</label>
                <input 
                    type="text" 
                    placeholder="Ingresar" 
                    {...register('colony')} 
                    id="colony" 
                    className={errors.colony?.message && styles.error}
                />
                {errors.colony?.message && <span>{errors.colony.message}</span>}
            </div>
        </div>
        <div className={`
            ${styles.inline} 
            ${classCenter}
            row
            gap-0
            gap-sm-0
            gap-md-0
            gap-lg-0
            gap-xl-4
            gap-xxl-4
        `}>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="address" className="regular-body">Dirección</label>
                <textarea 
                    rows={3} 
                    placeholder="Ejemplo: calle hacia San Salvador"
                    {...register('address')} 
                    id="address"
                    className={errors.address?.message && styles.error}
                >
                </textarea>
                {errors.address?.message && <span>{errors.address.message}</span>}
            </div>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="zipCode" className="regular-body">Código postal</label>
                <input 
                    type="text" 
                    placeholder="0000" 
                    {...register('zipCode')} 
                    id="zipCode" 
                    className={errors.zipCode?.message && styles.error}
                />
                {errors.zipCode?.message && <span>{errors.zipCode.message}</span>}
            </div>
        </div>
        <div className={`
            ${styles.inline} 
            ${classCenter}
            row
            gap-0
            gap-sm-0
            gap-md-0
            gap-lg-0
            gap-xl-4
            gap-xxl-4
        `}>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="phone" className="regular-body">Teléfono</label>
                <input 
                    type="text" 
                    placeholder="0000-0000" 
                    {...register('phone')} 
                    id="phone" 
                    className={errors.phone?.message && styles.error}
                />
                {errors.phone?.message && <span>{errors.phone.message}</span>}
            </div>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="email" className="regular-body">Correo</label>
                <input 
                    type="text" 
                    placeholder="correo@ejemplo.com" 
                    {...register('email')} 
                    id="email" 
                    className={errors.email?.message && styles.error}
                />
                {errors.email?.message && <span>{errors.email.message}</span>}
            </div>
        </div>
        <div className={`
            ${styles.inline}
            ${classCenter} 
            row
            gap-0
            gap-sm-0
            gap-md-0
            gap-lg-0
            gap-xl-4
            gap-xxl-4
        `}>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="aditionalInfo" className="regular-body">Información adicional (Opcional)</label>
                <textarea 
                    rows={3} 
                    placeholder="Ejemplo: frente al centro comercial"
                    {...register('aditionalInfo')}
                    id="aditionalInfo"
                >              
                </textarea>
            </div>
            <div className={`
                ${styles.form_control}
                col-12
                col-sm-12
                col-md-12
                col-lg-12
                col-xl-5
                col-xxl-5
            `}>
                <label htmlFor="instructions" className="regular-body">Instrucciones (Opcional)</label>
                <textarea 
                    rows={3} 
                    placeholder="Ejemplo: al llegar al centro comercial girar a la derecha"
                    {...register('instrunctions')}
                    id="instrunctions"
                >              
                </textarea>
            </div>
        </div>
        {
            showButtonForm &&
            <div className="
                    d-flex
                    justify-content-end
                    col-sm-12
                    col-md-12
                    col-lg-12
                    col-xl-11
                    col-xxl-11
                ">
                    <Button 
                        label="Realizar pedido"
                        type="outline-secondary"
                        typeActionButton="submit"
                        isRedirect={isValid ? true : false}
                        link={isValid ? '/checkout/successful-purchase' : ''}
                    />
                </div>
        }
      </form>
    </div>
  )
}
