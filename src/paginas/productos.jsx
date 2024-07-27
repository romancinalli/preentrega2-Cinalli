
import productosOrtopedia from './catalogo';
import Producto from './producto'
import '../paginas/estilos.css'

function Productos(){

    return(
        <div id='productosContainer'>
            
            {productosOrtopedia.map(prod=>(<Producto key={prod.id} {...prod}/>))}
                
        </div>

    )
}

export default Productos;