import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './paginas/layout'
import Blog from './paginas/blog'
import Eventos from './paginas/eventos'
import Home from './paginas/home'
import Productos from './paginas/productos'
import Detalle from './paginas/detalleProducto'


import './App.css'

function App() {
  


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout/>}>
          <Route index element={Home}/>
          <Route path='blog' element={<Blog/>}/>
          <Route exact path='productos' element={<Productos/>}/>
          <Route path='productos/:id' element={<Detalle/>}/>
          <Route path='*' element={<Eventos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
