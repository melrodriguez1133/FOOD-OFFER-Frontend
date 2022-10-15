import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {DatePicker, TimePicker, DateTimePicker} from '@material-ui/pickers';
import {Formulario, Label, GrupoInput, Input} from './elementos/Formularios';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
/*import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';*/
//import Datetime from 'react-datetime';


function App() {
  const [nombre,setNombre]=useState("Nombre de la empresa");

  /*const cambiarNombre=(e)=>{
    const value=e.target.value;
    console.log(value);
    setNombre(value);
  };

  const Formulario = styled.form`
    background: #ccc;
  `;*/

  const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
  console.log(fechaSeleccionada)

  const guardarClick=()=>{
  
  console.log("Esta es mi estado local: ",nombre);

  };
  return (
    
    <main>
          <Formulario action=''>
            <div>
              <Label htmlFor=''>Registro de Empresa</Label>
              <GrupoInput>
                <Input type="text" placeholder='Empresa'/>
                <FontAwesomeIcon icon={faCheckCircle}/>
              </GrupoInput>
              
            </div>
            <div>
              <Label htmlFor=''>Tipo de Negocio</Label>
              <Input type="text" placeholder='Tipo'/>
            </div>
      </Formulario>
      <br></br>
      <Formulario action=''>
            
      </Formulario>
      <br></br>
      <form action=''>
            <label htmlFor=''>Descripción</label>
            <input type="text" placeholder='Descripcón de la empresa'/>
      </form>
      <br/>
       <div className='Fecha_y_Hora'>
          <label className="label">Horarios de Trabajo </label>
            <DateTimePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />
       </div>
       </main>  
/*
<button onClick={guardarClick} className="boton">Guardar</button>  

<label className="label">Nombre </label>
          <i class="fa-thin fa-user" aria-hidden="true"/>
          <input 
            id="nombre" 
            name="nombre" 
            value={nombre} 
            onChange={cambiarNombre}
            className="input"
        ></input>

        <label className="label">Descripción </label>
        <i class="fa-thin fa-user" aria-hidden="true"/>
          <input 
            id="nombre" 
            name="nombre" 
            value={nombre} 
            onChange={cambiarNombre}
            className="input"
        ></input>

<div className='Fecha'>
          <label>Fecha </label>
            <DatePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />
       </div>
       <div className='Hora'>
          <label>Hora </label>
            <TimePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />
       </div>*/
      
  );
}

export default App;
