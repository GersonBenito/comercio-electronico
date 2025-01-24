/**
 * Archivo para agregar la data complementaria que no dispone la API que se esta 
 * consumiendo
 */

import { Payment, TypePayment } from "@/interfaces/type-pyment"

interface ComplementData {
    typePayments: TypePayment[]
    typesPaymentProcessors: Payment[]
}

export const complementData: ComplementData = {
    typePayments: [
        {
            id: 1,
            type: 'Transferencia Bancaria Directa',
            description: 'Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de pedido como referencia de pago. Su pedido no será enviado hasta que los fondos se hayan liquidado en nuestra cuenta.'
        },
        {
            id: 2,
            type: 'Contra Entrega',
            description: 'Realice el pago al momento de recibir su pedido directamente en su domicilio. Asegúrese de tener el monto exacto en efectivo, ya que el repartidor podría no contar con cambio.'
        }
    ],
    typesPaymentProcessors: [
        {
          brand: 'VISA',
          icon: 'visa',
          cardNumber: '577551756017'
        },
        {
          brand: 'PayPal',
          icon: 'paypal',
          cardNumber: '323976338104'
        }
    ]
}