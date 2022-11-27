import Sidebar from './Screem/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowRegistrarEmpresas from './Pages/ShowRegistrarEmpresas';
import CreateRegistrarEmpresa from './Pages/CreateRegistrarEmpresa';
import VistaProductos from './Pages/VistaProductos';
import VistaProductosEmpresa from './Pages/VistaProductosEmpresa';
import RegistroProducto from './Pages/RegistroProducto';
import EditarProductos from './Pages/EditarProductos';
import EditRegistrarEmpresa from './Pages/EditRegistrarEmpresa';
import  Login from './Screem/login';
import RegistrarCliente from './Pages/RegistrarCliente';
import VistaClientesAdmin from './Pages/VistaClienteAdmin';
import VisualizarEmpresa from './Pages/VisualizarEmpresa';
import VisualizarCliente from './Pages/VisualizarCliente';
import EditarCliente from './Pages/EditarCliente';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
      <Route path='/' element={<Login/>} />
        <Route path='/empresas' element={<ShowRegistrarEmpresas />} />
        <Route path='/empresa/empresa/RegistrarEmpresa' element={ <CreateRegistrarEmpresa/>}/>
        <Route path='/empresa/empresa/EditarEmpresa' element={ <EditRegistrarEmpresa/>}/>
        <Route path='/empresa/empresa/EditarEmpresa/:id' element={ <EditRegistrarEmpresa/>}/>
        <Route path='/empresa/empresa/VisualizarEmpresa' element={ <VisualizarEmpresa/>}/>
        <Route path='/empresa/empresa/VisualizarEmpresa/:id' element={ <VisualizarEmpresa/>}/>
        <Route path='/productos' element={<VistaProductosEmpresa />} />
        <Route path='/empresa/productos-empresa/RegistroProducto' element={ <RegistroProducto/>}/>
        <Route path='/empresa/productos-empresa/EditarProducto' element={ <EditarProductos/>}/>
        <Route path='/empresa/productos-empresa/EditarProducto/:id' element={ <EditarProductos/>}/>
        <Route path='/cliente/RegistrarCliente' element={ <RegistrarCliente/>}/>
        <Route path='/empresa/empresa/EditarCliente' element={ <EditarCliente/>}/>
        <Route path='/empresa/empresa/EditarCliente/:id' element={ <EditarCliente/>}/>
        <Route path='/empresa/empresa/VisualizarCliente' element={ <VisualizarCliente/>}/>
        <Route path='/empresa/empresa/VisualizarCliente/:id' element={ <VisualizarCliente/>}/>
        <Route path='/cliente/Ofertas' element={<VistaProductos />} />
        <Route path='/clientes' element={<VistaClientesAdmin />} />
      </Routes>
    </Router>
   
  );
}        
export default App;