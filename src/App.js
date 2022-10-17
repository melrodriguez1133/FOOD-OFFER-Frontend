import React, {useState} from 'react';
import './App.css';
import {TimePicker} from '@material-ui/pickers';
import {Formulario, Label, GrupoInput, Input} from './elementos/Formularios';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import * as react from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function App() {
  const [nombre,setNombre]=useState("Nombre de la empresa");

    const [tipo, setTipo] = React.useState('');
    const handleChange = (event) => {
      setTipo(event.target.value);
    };

      const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
      const handleChange1 = (newValue) => {
        setValue(newValue);
      };



  return (
    
    <main>
          <Formulario action=''>
            <div>
              <Label htmlFor=''>Registro de Empresa</Label>
              
            <TextField
          id="outlined-multiline-static"
          label="Nombre de la Empresa"
          variant="outlined"
          />
            <br></br>
              <br></br>
              <Box sx={{ minWidth: 120 }}>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-label">Tipo de Negocio</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipo}
            label="Tipo de Negocio"
            onChange={handleChange}
            >
            <MenuItem value={10}>Cafeteria</MenuItem>
            <MenuItem value={20}>Comercial</MenuItem>
            <MenuItem value={30}>Restaurantes</MenuItem>
            </Select>
          </FormControl>
          </Box>
          
          <br></br>
          <TextField
          id="outlined-multiline-static"
          label="Descripcion"
          multiline
          rows={5}
          variant="outlined"
          />

        <br></br>
        <br></br>
        <label className="label">Horarios de Trabajo </label>
          <FormGroup>
            <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Lunes" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Martes" />
            </div>
            <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Miercoles" />  
            <FormControlLabel control={<Checkbox defaultChecked />} label="Jueves" />
            </div>
            <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Viernes" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Sabado" />
            </div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Domingo" />
          </FormGroup>
        
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
            <TimePicker
              Label="Hora de Apertura"
              value={value}
              onChange={handleChange1}
              renderInput= {<TextField id="outlined-multiline-static" label="Número de Celular" variant="outlined" />}
            />
            <TimePicker
              label="Hora de Cierre"
              value={value}
              onChange={handleChange1}
              renderInput= {<TextField
          id="outlined-multiline-static"
          label="Correo de Empresa"
          variant="outlined"
          />}
            />
            </Stack>
            </LocalizationProvider>
            </div>
        
            <div>
            <br></br>
            <br></br>
            <br></br>
          
            <TextField
            id="outlined-multiline-static"
            label="Número de Celular"
            variant="outlined"
            />
            <br></br>
            <br></br>
            
            <TextField
          id="outlined-multiline-static"
          label="Número de Celular"
          variant="outlined"
          />
            <br></br>
            <br></br>
            
            <TextField
          id="outlined-multiline-static"
          label="Ingrese su dirección"
          variant="outlined"
          />
            <br></br>
            <br></br>
            
            <TextField
          id="outlined-multiline-static"
          label="Correo de Empresa"
          variant="outlined"
          />
            
            
            </div>
            <Button variant="primary" type="submit">
              Registrar
            </Button>
            <Button variant="primary" type="submit">
              Cancelar
            </Button>
      </Formulario>
       </main>  
  );
 }

export default App;