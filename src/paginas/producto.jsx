
import { Link } from "react-router-dom";

function Producto({id, nombre, descripcion,precio}){

    return(
        <div className="card">
            <Link to={`/productos/${id}`  }>
                <h4>{nombre}</h4>
                <h4>{precio}</h4>
            </Link>
        </div>
    )
}

export default Producto;