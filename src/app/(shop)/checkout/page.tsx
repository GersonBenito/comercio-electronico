import { font } from "@/config/font";
import styles from "./checkout.module.css";
import { Form, Summary, Title } from "@/components";
import Button from "@/components/ui/button/Button";
import TypePayment from "@/components/ui/type-payment/TypePayment";
import { complementData } from "@/libs/utils/complement-data";

/**
 * Para los tipos de pago se usara data estatico
 * debido a que la API que se esta consumiento no dispone de estos datos,
 * en caso de disponer con una API que cuente con todos los datos 
 * la variable almacenaria los datos obtenidos desde la API
 */
const typePayments = complementData.typePayments;

export default function() {
    return (
        <div className={`${font.className} ${styles.chekout_wrapper}`}>
            <Title title="Checkout" className="align-center mb-2" />
            <div className={`${styles.content_checkout}`}>
                <Form />
                <div className={`${styles.confirm}`}>
                    <Summary />
                    <div className={styles.divider}/>
                    <TypePayment typePayments={typePayments}/>
                    <div className={`${styles.privacy_policy} mb-3`}>
                        <p>
                            Sus datos personales se utilizarán para respaldar su experiencia en este sitio web, 
                            para administrar el acceso a su cuenta y para otros fines descritos en nuestra <span>política de privacidad.</span>
                        </p>
                    </div>
                    <div className="align-center">
                        <Button 
                            label="Realizar pedido" 
                            type="outline-secondary" 
                            isRedirect={true}
                            link="/products"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}