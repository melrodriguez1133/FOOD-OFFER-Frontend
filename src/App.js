import RegistrarEmpresa from './Components/RegistrarEmpresa';
import React, { Component } from "react";
import './Components/RegistrarEmpresa.css';
class registrarEmpresa extends Component {
    render(){
        return (
            <RegistrarEmpresa/>
        );
    }
}

export default registrarEmpresa;

/*import React, {useState} from 'react';
import imagfoodre from './imagfoodre.jpeg';
import './App.css';
//import { TextField } from '@material-ui/core';
import { InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { Grid  } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const dataEspecialist = [
  {
    id: "Cafeteria",
    descriptions: 'Cafeteria',
  },
  {
    id: "Supermercado",
    descriptions: 'Supermercado',
  },
  {
    id: "Restaurante",
    descriptions: 'Restaurante',
  }
]

function App() {

  const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        nameEmpresa: '',
        tipoEmpresa: 0,
        descripcion:'',
        horaIni:'',
        horaFin:'',
        numCel:'',
        nrotelef:'',
        direccion:'',
        email:''
      });

      const { nameEmpresa, tipoEmpresa,descripcion, dTrabaj, horaIni,horaFin, numCel,nrotelef, direccion, email} = formData;
    
      const handleOnchange = (e) => {
        console.log([e.target.name], e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
        
      const handleSubmit = (nameEmpresa, tipoEmpresa, descripcion, dTrabaj, horaIni, horaFin, numCel, nrotelef, direccion, email) => {
        console.log(nameEmpresa, tipoEmpresa, descripcion, dTrabaj, horaIni, horaFin, numCel, nrotelef, direccion, email);
        setLoading(true)
        alert(`Datos del Formulario:, Nombre de Empresa: ${nameEmpresa}, Tipo de Empresa: ${tipoEmpresa}, Descripción de la Empresa: ${descripcion}, Dias de Trabajo: ${dTrabaj},
        Hora de Apertura: ${horaIni}, Hora de Cierre: ${horaFin}, Número de Celular: ${numCel}, Número de telefono: ${nrotelef}, Dirección de la Empresa: ${direccion}, Correo Electrónico: ${email}`)
        setTimeout(() =>{
          setLoading(false)
        }, 3000);
     }

  return (
  <header>
    <body>
    <div id="foodOffer">Food Offer</div>
    <div id="titulo">Registro de Empresa</div>
      <div id="imagComida">
      <img src={imagfoodre} class="imag" alt="logo" />
      </div>
      <div id="moveform">
          <lightning-card  id="tamform">
            <form>
            <div>
              <TextField
                      required
                      error={false}
                      label="Nombre de la empresa"
                      type="text"
                      name="nameEmpresa"
                      value={nameEmpresa}
                      onChange={handleOnchange}
                      margin="dense"
                      fullWidth
                      variant="outlined"
            />
                           
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    
                    <InputLabel id="demo-simple-select-label">Tipo de empresa</InputLabel>
                <Select
                      required
                        name="tipoEmpresa"
  
                        value={tipoEmpresa}
                        fullWidth
                        label="tipoEmpresa"
                        onChange={handleOnchange}>
                        <MenuItem value={0}>Seleccione</MenuItem>
                        {dataEspecialist && dataEspecialist.map((d, index) => (
                          <MenuItem key={d.id} value={d.id}>{d.descriptions}</MenuItem>
                        ))}
                        </Select>
            
            </Grid>
            
            <TextField
  
                  required
                    error={false}
                    label="Descripcion"
                    multiline
                    rows={5}
                    type="text"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
            />
            <FormGroup>
        <TextField
              required
              error={false}
              label="Dias de Trabajo"
              type="text"
              name="dTrabaj"
              value={dTrabaj}
              onChange={handleOnchange}
              margin="dense"
              fullWidth
              variant="outlined"
  
            />
        
            </FormGroup>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            
              <TextField
              required
                id="time"
                label="Hora de Apertura"
                type="time"
                name="horaIni"
                value={horaIni}
                onChange={handleOnchange}
                margin="dense"
                    variant="outlined"
                    fullWidth
              /> 
              
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
              required
                id="time"
                label="Hora de Cierre"
                type="time"
                name="horaFin"
                value={horaFin}
                onChange={handleOnchange}
                margin="dense"
                    variant="outlined"
                    fullWidth
              />
              </Grid>
              
              </div>
                  
              <div>
              <TextField
              required
              error={false}
              label="Número de Celular"
              type="text"
              name="numCel"
              value={numCel}
              onChange={handleOnchange}
              margin="dense"
              fullWidth
              variant="outlined"
              />
              <TextField
            required
            error={false}
            label="Número de Telefono"
            type="text"
            name="nrotelef"
            value={nrotelef}
            onChange={handleOnchange}
            margin="dense"
            fullWidth
            variant="outlined"
            />
                      
              <TextField
              required
              error={false}
              label="Ingrese su dirección"
              type="text"
              name="direccion"
              value={direccion}
              onChange={handleOnchange}
              margin="dense"
              fullWidth
              variant="outlined"
  
            />
            
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                    required
                      error={false}
                      label="Correo Electrónico"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleOnchange}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
              
              
              </div>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box sx={{ '& > button': { m: 1 } }}>
                      <LoadingButton type='submit'
                        size="medium"
                       
                        onClick={() => handleSubmit(nameEmpresa, tipoEmpresa, descripcion,dTrabaj, horaIni, horaFin, numCel, nrotelef, direccion, email)}
                        loading={loading}
                        variant="outlined"
                        disabled={!loading ? false : true}
                      >
                        Registrar
                      </LoadingButton>
  
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box sx={{ '& > button': { m: 1 } }}>
              <Button variant="outlined">
                Cancelar
              </Button>
              </Box>
              </Grid>

            </form>
           </lightning-card>
        </div>
    </body>
  </header>
  );
}

export default App;*/