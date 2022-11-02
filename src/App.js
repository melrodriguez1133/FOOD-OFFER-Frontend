import './App.css';
import './customcss/style.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Overview';
import ShowRegistrarEmpresas from './componentesEmpresa/ShowRegistrarEmpresas';
import VistaProductos from './pages/VistaProductos';
import VistaProductosEmpresa from './pages/VistaProductosEmpresa';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/empresa/registrar-empresa' element={<ShowRegistrarEmpresas />} />
        <Route path='/empresa/productos-empresa' element={<VistaProductosEmpresa />} />
        <Route path='/usuarios/productos' element={<VistaProductos />} />
      </Routes>
    </Router>
  );
}        
export default App;
/*import './customcss/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowRegistrarEmpresas from './componentesEmpresa/ShowRegistrarEmpresas';
import CreateRegistrarEmpresa from './componentesEmpresa/CreateRegistrarEmpresa';
import EditRegistrarEmpresa from './componentesEmpresa/EditRegistrarEmpresa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowRegistrarEmpresas/>}/>
          <Route path='/create' element={ <CreateRegistrarEmpresa/>}/>
          <Route path='/edit/:id' element={ <EditRegistrarEmpresa/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//<button className='btn btn-primary'>Crear</button>
export default App;*/