import productosOrtopedia from "./catalogo";
import { useParams } from "react-router-dom";
import '../paginas/estilos.css'


function Detalle(){
    const {id}=useParams()

    const producto= productosOrtopedia.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h3>El producto no existe</h3>
    }

    return(
        <div className="detalleContenedor">
            <h2>Detalle del producto</h2>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>{producto.precio}</h3>
        </div>
    )
}

export default Detalle;