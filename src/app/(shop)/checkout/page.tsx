import { font } from "@/config/font";
import styles from "./checkout.module.css";
import { Form, Title } from "@/components";
import Button from "@/components/ui/button/Button";
import { initialData } from "@/dummy/dummy";
import { getTotalPrice, transformAmount } from "@/helpers";
import TypePayment from "@/components/ui/type-payment/TypePayment";
import { complementData } from "@/libs/utils/complement-data";

// Data dummy, a un no se modificara debido a que estos datos pertenecen al carrito
const cartProducts = initialData.products.slice(5, 8);

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
                    <div className={`${styles.list_products_checkout}`}>
                        <div className={`${styles.titles} ${styles.content_space_between} mb-1`}>
                            <h3>Productos</h3>
                            <h3>Subtotal</h3>
                        </div>
                        {cartProducts.map(product =>(
                            <div key={product.id} className={`${styles.product} ${styles.content_space_between} mb-1`}>
                                <p>{product.title} <span>x 2</span></p>
                                <p className={`${styles.price_product}`}>
                                    {transformAmount(product.price)}
                                </p>
                            </div>
                        ))}
                        <div className={`${styles.subtotal} ${styles.content_space_between} mb-1`}>
                            <h4>Subtotal</h4>
                            <p className={`${styles.amount_subtotal}`}>
                                {transformAmount(getTotalPrice(cartProducts))}
                            </p>
                        </div>
                        <div className={`${styles.total} ${styles.content_space_between} mb-1`}>
                            <h4>Total</h4>
                            <p className={`${styles.amount_total}`}>
                                {transformAmount(getTotalPrice(cartProducts))}
                            </p>
                        </div>
                    </div>
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