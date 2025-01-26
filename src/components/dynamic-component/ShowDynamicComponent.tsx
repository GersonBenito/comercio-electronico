/**
 * Componente para cargar de forma dinamico otros componente que se van a renderizar en la pantalla
 * @param param
 * @returns 
 */

'use client';

import dynamic from "next/dynamic";
import { useDeviceDetection } from "@/hooks";
// import { Form } from "@/components/ui/form/Form";
import { } from '../ui/form/Form'

/**
 * Nota: En caso de querer ocupar este componente para renderizar
 * de forma dinamica mas de dos componente que contengan props 
 * se debe de crear una interfaz donde todos los compoenentes reciban
 * estas mismas props mediante la interfaz y usen solas que consideren necesario.
 * 
 * Este renderizado de componente dinamico es para que en el inspector de HTML no se pueda visualiza
 * una solucion sencilla es la de ocultarlo medianete css usando display: none, sin embargo el bloque html queda cargado
 */
interface Props {
    componentType: "Button" | "Form",
    isButton?: boolean;
    props?: {
        label?: string;
        type?: string; 
        isRedirect?: boolean
        link?: string;
        icon?: string;
        className?: string;
        onClick?: () => void;
        disabled?: boolean;
    }
}

const componentsMap = {
    Button: dynamic(() => import("@/components/ui/button/Button"), { ssr: true }),
    Form: dynamic(() => import("@/components/ui/form/Form"), { ssr: true }),
};

export default function ShowDynamicComponent({componentType = 'Button', isButton = false, props}: Props){
    const isMobile = useDeviceDetection();
    // Verificar el tipo de dispositivo
    if (isMobile) {
        if(isButton){
            const DynamicComponent = componentsMap[componentType];
            return (
                <DynamicComponent 
                    label="Continuar"
                    type={props?.type} 
                    isRedirect={true}
                    link="/checkout/address"
                    icon={props?.icon}
                    className={props?.className}
                    onClick={props?.onClick}
                    disabled={props?.disabled}
                />
            )
        }
        return null;
    }

    const DynamicComponent = componentsMap[componentType];
    
    if(!DynamicComponent){
        return <div>Component no encontrado</div>
    }

    return (
        <DynamicComponent 
            label={props?.label}
            type={props?.type} 
            isRedirect={props?.isRedirect}
            link={props?.link}
            icon={props?.icon}
            className={props?.className}
            onClick={props?.onClick}
            disabled={props?.disabled}
        />
    );
}
