import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    }
}

export default function({params}: Props) {
    const { id } = params;
    // TODO: agregar 
    if(id === 'test'){
        notFound();
    }
    return (
        <div>Categoria: {id}</div>
    );
}