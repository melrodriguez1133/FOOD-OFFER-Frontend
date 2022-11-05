/*import '../customcss/style.css';*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowRegistrarEmpresas from './ShowRegistrarEmpresas'
import CreateRegistrarEmpresa from './CreateRegistrarEmpresa';
import EditRegistrarEmpresa from './EditRegistrarEmpresa';

const Empresa = () => {
  return (
    <div className="Empresa">
      <BrowserRouter>
        <Routes>
          <Route path='/empresa/registrar-empresa' element={ <ShowRegistrarEmpresas/>}/>
          <Route path='/empresa/registrar-empresa/create' element={ <CreateRegistrarEmpresa/>}/>
          <Route path='/empresa/registrar-empresa/edit/:id' element={ <EditRegistrarEmpresa/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Empresa;