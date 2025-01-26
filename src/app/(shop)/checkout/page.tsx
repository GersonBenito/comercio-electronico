import { font } from "@/config/font";
import styles from "./checkout.module.css";
import { Summary, Title } from "@/components";
import TypePayment from "@/components/ui/type-payment/TypePayment";
import { complementData } from "@/libs/utils/complement-data";
import ShowDynamicComponent from "@/components/dynamic-component/ShowDynamicComponent";


/**
 * Para los tipos de pago se usara data estatico
 * debido a que la API que se esta consumiento no dispone de estos datos,
 * en caso de disponer con una API que cuente con todos los datos 
 * la variable almacenaria los datos obtenidos desde la API
 */
const typePayments = complementData.typePayments;

export default function Page() {
    return (
        <div className={`
            ${font.className} 
            ${styles.chekout_wrapper}
            pr-3
            pl-3
            pt-4
            pb-4
            pr-sm-4
            pr-md-4
            pr-lg-4
            pr-xl-5
            pr-xxl-6
            pr-sm-4
            pl-md-4
            pl-lg-4
            pl-xl-5
            pl-xxl-6
        `}>
            <Title title="Checkout" className="align-center mb-2" />
            <div className={`
                ${styles.content_checkout}
                d-flex
                justify-content-center
            `}>
                <ShowDynamicComponent 
                    componentType="Form" 
                    props={{
                        className: `
                            d-sm-none 
                            d-md-none 
                            d-lg-block 
                            d-xl-block 
                            d-xxl-block 
                            d-none
                            col-12 
                            col-sm-12 
                            col-md-6 
                            col-lg-5 
                            col-xl-6 
                            col-xxl-6
                        `
                    }}
                />
                <div className={`
                    ${styles.confirm}
                    col-12
                    col-sm-12
                    col-md-12
                    col-lg-6
                    col-xl-5
                    col-xxl-5
                `}>
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
                        <ShowDynamicComponent 
                            componentType="Button" 
                            isButton={true}
                            props={{
                                label: 'Realizar pedido',
                                type: "outline-secondary",
                                isRedirect: true,
                                link: '/checkout/successful-purchase'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}