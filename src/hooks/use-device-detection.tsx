import { useEffect, useState } from "react";

export const useDeviceDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        // Funcion para actualizar el estado al hacer rezise
        const handleResize = () =>{
            setIsMobile(window.innerWidth <= 841); // el valor cambiara con los breakpoints
        }

        // Detectar el tamaño inicial del dispositivo
        handleResize();
        
        // Escuchar los cambios de tamaño
        window.addEventListener('resize', handleResize);

        return () => {
            // Remover el evento
            window.removeEventListener('resize', handleResize);
        };

    },[]);
    return isMobile;
}