import './App.css';
import './customcss/style.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Overview';
import ShowRegistrarEmpresas from './componentesEmpresa/ShowRegistrarEmpresas';
import CreateRegistrarEmpresa from './componentesEmpresa/CreateRegistrarEmpresa';
import VistaProductos from './pages/VistaProductos';
import VistaClientesProfileAdmin from './pages/VistaClientesProfileAdmin';


/*import Vista from './pages/Vista';*/
import RegistrarProducto from './componentesEmpresa/RegistrarProducto';
import FormValidation from './pages/FormValidation'


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        
        <Route path='/empresa/registrar-empresa' element={<ShowRegistrarEmpresas />} />
        <Route path='/empresa/registrar-empresa/create' element={ <CreateRegistrarEmpresa/>}/>
        <Route path='/home' element={<VistaClientesProfileAdmin/>} />

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