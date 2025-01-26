import { font } from "@/config/font";
import styles from "./form.module.css";

interface Props {
    className?: string;
}
export default function Form({className}:Props){
  return (
    <div className={`${font.className} ${styles.wrapper_form} ${className}`}>
      <h2 className="mb-2">Detalles de facturación</h2>
      <form>
        <div className={`
            ${styles.inline} 
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
                <input type="text" placeholder="Ingresar" name="firstName" id="firstName"/>
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
                <input type="text" placeholder="Ingresar" name="lastName" id="lastName" />
            </div>
        </div>
        <div className={`
            ${styles.inline} 
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
                <select name="country" id="country">
                    <option value="">Seleccionar</option>
                    <option value="">El Salvador</option>
                </select>
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
                <label htmlFor="deparment" className="regular-body">Departamento</label>
                <select name="deparment" id="deparment">
                    <option value="">Seleccionar</option>
                    <option value="">La Libertad</option>
                </select>
            </div>
        </div>
        <div className={`
            ${styles.inline} 
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
                <select name="municipality" id="municipality">
                    <option value="">Seleccionar</option>
                    <option value="">Santa Tecla</option>
                </select>
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
                <input type="text" placeholder="Ingresar" name="colony" id="colony" />
            </div>
        </div>
        <div className={`
            ${styles.inline} 
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
                    name="address" 
                    id="address"
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
                <label htmlFor="zipCode" className="regular-body">Código postal</label>
                <input type="text" placeholder="0000" name="zipCode" id="zipCode" />
            </div>
        </div>
        <div className={`
            ${styles.inline} 
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
                <input type="text" placeholder="0000-0000" name="phone" id="phone" />
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
                <input type="text" placeholder="correo@ejemplo.com" name="email" id="email" />
            </div>
        </div>
        <div className={`
            ${styles.inline} 
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
                    name="aditionalInfo" 
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
                    name="instrunctions" 
                    id="instrunctions"
                >              
                </textarea>
            </div>
        </div>
      </form>
    </div>
  )
}
