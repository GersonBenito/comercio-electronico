interface Props {
    params: {
        id: string;
    }
}

export default function({params}: Props) {
    const { id } = params;
    return (
        <div>Categoria: {id}</div>
    );
}