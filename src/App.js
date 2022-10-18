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
import { LoadingButton } from '@mui/lab';
import { Grid, Card, CardContent  } from '@mui/material';

const dataEspecialist = [
  {
    id: 1,
    descriptions: 'Cafeteria',
  },
  {
    id: 2,
    descriptions: 'Supermercado',
  },
  {
    id: 3,
    descriptions: 'Restaurante',
  }
]

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

      const dataEspecialist = [
        {
          id: 1,
          descriptions: 'Cafeteria',
        },
        {
          id: 2,
          descriptions: 'Supermercado',
        },
        {
          id: 3,
          descriptions: 'Restaurante',
        }
      ]

      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        nameEmpresa: '',
        descripcion:'',
        horaIni:'',
        horaFin:'',
        lastname: '',
        rol: 0
    
      });
    
      const { nameEmpresa, descripcion,horaIni,horaFin,lastname, rol } = formData;
    
      const handleOnchange = (e) => {
        console.log([e.target.name], e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      const handleSubmit = (nameEmpresa, descripcion,horaIni,horaFin,lastname, rol) => {
        console.log(nameEmpresa,descripcion, horaIni,horaFin,lastname, rol);
        setLoading(true)
        alert(`datos formularios:::, ${nameEmpresa}, ${descripcion},${horaIni},${horaFin},${lastname}, ${rol}`)
        setTimeout(() => {
          setLoading(false)
        }, 3000);
      }

  return (
    
    <main>
          <Formulario action=''>
            <div>
              <Label htmlFor=''>Registro de Empresa</Label>
              
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
                  

         /* id="outlined-multiline-static"
          label="Nombre de la Empresa"
          variant="outlined"*/
          />
            <br></br>
              <br></br>
              
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="demo-simple-select-label">Tipo de empresa</InputLabel>
              <Select
                    required
                      name="tipoEmpresa"
                      value={rol}
                      fullWidth
                      label="tipoEmpresa"
                      onChange={handleOnchange}>
                      <MenuItem value={0}>Seleccione</MenuItem>
                      {dataEspecialist && dataEspecialist.map((d, index) => (
                        <MenuItem key={d.id} value={d.id}>{d.descriptions}</MenuItem>
                      ))}
                      </Select>
          </FormControl>
          </Grid>
          
          <br></br>
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
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          
            <TextField
            required
              id="time"
              label="Hora de Cierre"
              type="time"
              name="horaFin"
              value={horaFin}
              onChange={handleChange1}
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
              onChange={handleChange1}
              margin="dense"
                  variant="outlined"
                  fullWidth
            />
            
            </Grid>
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
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box sx={{ '& > button': { m: 1 } }}>
                    <LoadingButton
                      size="medium"
                      onClick={() => handleSubmit(nameEmpresa,descripcion,horaIni, lastname, rol)}
                      loading={loading}
                      variant="outlined"
                      disabled={!loading ? false : true}
                    >
                      Enviar
                    </LoadingButton>

                  </Box>
                </Grid>
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