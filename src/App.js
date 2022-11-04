
import './customcss/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowRegistrarEmpresas from './componentes/ShowRegistrarEmpresas';
import CreateRegistrarEmpresa from './componentes/CreateRegistrarEmpresa';
import EditRegistrarEmpresa from './componentes/EditRegistrarEmpresa';
import EditarProductos from './componentes/EditarProductos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowRegistrarEmpresas/>}/>
          <Route path='/create' element={ <CreateRegistrarEmpresa/>}/>
          <Route path='/edit/:id' element={ <EditRegistrarEmpresa/>}/>
          <Route path='/editar/:id' element={ <EditarProductos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;