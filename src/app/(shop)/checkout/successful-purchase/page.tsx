import { Title } from '@/components';
import styles from './successfull-purchase.module.css';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';

export default function() {
    return (
        <div className={`
            ${styles.wrapper_purchase}
            pr-3
            pl-3
            pt-4
            pb-4
            pr-sm-4
            pr-md-4
            pr-lg-4
            pr-xl-6
            pr-xxl-6
            pr-sm-4
            pl-md-4
            pl-lg-4
            pl-xl-6
            pl-xxl-6
        `}>
            <Title title="Compra exitosa" className="align-center mt-2 mb-2" />
            <div className={`${styles.content_purchase}`}>
                <Image src="/assets/images/purchase.webp" width={400} height={400} alt="purchase"  />
                <h2>Felicidades</h2>
                <p>Su pedido ha sido realizado y se le entregará pronto.</p>
                <div className="mt-4 d-flex gap-3">
                    <Button 
                        label="Regresar al inicio"
                        type="outline-primary" 
                        isRedirect={true}
                        link="/"
                    />
                    <Button 
                        label="Seguir comprando" 
                        isRedirect={true}
                        link="/products"
                    />
                </div>
            </div>
        </div>
    )
}