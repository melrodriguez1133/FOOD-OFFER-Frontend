import React from 'react';
import './App.css';
import VisualizadorEmpresa from './Componentes/VisualizadorEmpresa';
import VisualizadorEBar from './Componentes/VisualizadorEBar';
// material-ui

//import {
//    Button,
//} from '@mui/material';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function App() {

   return (
    <div className='app'>
        <VisualizadorEBar />
        <VisualizadorEmpresa />
    </div>
    
  );  
  
  }

export default App;
