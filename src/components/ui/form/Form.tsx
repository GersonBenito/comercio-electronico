import { font } from "@/config/font";
import styles from "./form.module.css";

export const Form = () => {
  return (
    <div className={`${font.className} ${styles.wrapper_form}`}>
      <h2 className="mb-2">Detalles de facturación</h2>
      <form>
        <div className={`${styles.full_name}`}>
            <div className={`${styles.form_control}`}>
                <label htmlFor="firstName" className="regular-body">Nombres</label>
                <input type="text" placeholder="Ingresar" name="firstName" id="firstName"/>
            </div>
            <div className={`${styles.form_control}`}>
                <label htmlFor="lastName" className="regular-body">Apellidos</label>
                <input type="text" placeholder="Ingresar" name="lastName" id="lastName" />
            </div>
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="country" className="regular-body">País</label>
            <select name="country" id="country">
                <option value="">Seleccionar</option>
                <option value="">El Salvador</option>
            </select>
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="deparment" className="regular-body">Departamento</label>
            <select name="deparment" id="deparment">
                <option value="">Seleccionar</option>
                <option value="">La Libertad</option>
            </select>
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="municipality" className="regular-body">Municipio</label>
            <select name="municipality" id="municipality">
                <option value="">Seleccionar</option>
                <option value="">Santa Tecla</option>
            </select>
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="colony" className="regular-body">Colonia</label>
            <input type="text" placeholder="Ingresar" name="colony" id="colony" />
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="address" className="regular-body">Dirección</label>
            <textarea 
                rows={3} 
                placeholder="Ejemplo: calle hacia San Salvador"
                name="address" 
                id="address"
            >
            </textarea>
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="zipCode" className="regular-body">Código postal</label>
            <input type="text" placeholder="0000" name="zipCode" id="zipCode" />
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="phone" className="regular-body">Teléfono</label>
            <input type="text" placeholder="0000-0000" name="phone" id="phone" />
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="email" className="regular-body">Correo</label>
            <input type="text" placeholder="correo@ejemplo.com" name="email" id="email" />
        </div>
        <div className={`${styles.form_control}`}>
            <label htmlFor="aditionalInfo" className="regular-body">Información adicional (Opcional)</label>
            <textarea 
                rows={3} 
                placeholder="Ejemplo: frente al centro comercial"
                name="aditionalInfo" 
                id="aditionalInfo"
            >              
            </textarea>
        </div>
      </form>
    </div>
  )
}
