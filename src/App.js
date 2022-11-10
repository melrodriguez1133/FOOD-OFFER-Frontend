import Sidebar from './Screem/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Overview';
import ShowRegistrarEmpresas from './Pages/ShowRegistrarEmpresas';
import CreateRegistrarEmpresa from './Pages/CreateRegistrarEmpresa';
import VistaProductos from './Pages/VistaProductos';
import VistaProductosEmpresa from './Pages/VistaProductosEmpresa';
import RegistroProducto from './Pages/RegistroProducto';
import EditarProductos from './Pages/EditarProductos';
import RegistroCliente from './Pages/RegistroCliente';
import Login from './Screem/Login';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/empresa/registrar-empresa' element={<ShowRegistrarEmpresas />} />
        <Route path='/empresa/registrar-empresa/create' element={ <CreateRegistrarEmpresa/>}/>
        <Route path='/empresa/productos-empresa' element={<VistaProductosEmpresa />} />
        <Route path='/usuarios/productos' element={<VistaProductos />} />
        <Route path='/empresa/productos-empresa/RegistroProducto' element={ <RegistroProducto/>}/>
        <Route path='/empresa/productos-empresa/EditarProducto' element={ <EditarProductos/>}/>
        <Route path='/cliente/registrar-cliente' element={ <RegistroCliente/>}/>
        <Route path='/Login' element={ <Login/>}/>
      </Routes>
    </Router>
   
  );
}        
export default App;