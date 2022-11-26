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

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
      <Route path='/login' element={<Login/>} />
        <Route path='/empresa/empresa' element={<ShowRegistrarEmpresas />} />
        <Route path='/empresa/empresa/RegistrarEmpresa' element={ <CreateRegistrarEmpresa/>}/>
        <Route path='/empresa/empresa/EditarEmpresa' element={ <EditRegistrarEmpresa/>}/>
        <Route path='/empresa/empresa/EditarEmpresa/:id' element={ <EditRegistrarEmpresa/>}/>
        <Route path='/empresa/productos-empresa' element={<VistaProductosEmpresa />} />
        <Route path='/empresa/productos-empresa/RegistroProducto' element={ <RegistroProducto/>}/>
        <Route path='/empresa/productos-empresa/EditarProducto' element={ <EditarProductos/>}/>
        <Route path='/empresa/productos-empresa/EditarProducto/:id' element={ <EditarProductos/>}/>
        <Route path='/' element={<VistaProductos />} />
      </Routes>
    </Router>
   
  );
}        
export default App;