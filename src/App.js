
import './customcss/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowRegistrarEmpresas from './componentes/ShowRegistrarEmpresas';
import CreateRegistrarEmpresa from './componentes/CreateRegistrarEmpresa';
import EditRegistrarEmpresa from './componentes/EditRegistrarEmpresa';

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
export default App;
