import { Link, Outlet} from 'react-router-dom';
import '../paginas/estilos.css'

function Layout(){

    return(
        <>
            <nav>
                <ul className='barra'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'productos'}>Productos</Link>
                    </li>
                    <li>
                        <Link to={'blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link to={'/eventos'}>Eventos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
        
    )
}
<Outlet/>
export default Layout;