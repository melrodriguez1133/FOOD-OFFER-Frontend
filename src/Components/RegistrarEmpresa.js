import React, {useState, Component} from 'react';
import './App.css';
import {Formulario, Label} from './elementos/Formularios';
import { InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { Grid  } from '@mui/material';

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

      //export default function CheckboxesGroup() {
        const [state, setState] = React.useState({
          Lunes: "Lunes",
          Martes: "Martes",
          Miercoles: "Miercoles",
          Jueves: "Jueves",
          Viernes: "Viernes",
          Sabado: "Sabado",
          Domingo: "Domingo",
          
        });

        cancelCourse = () =>{
            this.setState({
                nameEmpresa:"",
                tipoEmpresa:"",
                descripción:"",
                dTrabaj:"",
                horaIni:"",
                horaFin:"",
                numCel:"",
                numtelef:"",
                direccion:"",
                email:""
            })
        }
      
        const handleChange = (event) => {
          setState({
            ...state,
            [event.target.name]: event.target.checked,
          });
        };
      
        const { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = state;
        const error = [Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo].filter((v) => v).length !== 2;
        
  return (
    
    <main>
          <Formulario action=''>
            t'
                      size="medium"
                     
                      onClick={() => handleSubmit(nameEmpresa, tipoEmpresa, descripcion,dTrabaj, horaIni, horaFin, numCel, nrotelef, direccion, email)}
                      loading={loading}
                      variant="outlined"
                      disabled={!loading ? false : true}
                    >
                      Registrar
                    </LoadingButton><div>
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
          />
            <br></br>
              <br></br>
              
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
            <br></br>
            <br></br>
            <br></br>
          
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
            <br></br>
            <br></br>
            
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
            <br></br>
            <br></br>
            
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
            <br></br>
            <br></br>
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
                    <LoadingButton type='

                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ '& > button': { m: 1 } }}>
            <Button variant="outlined" 
            onClick={this.cancelCourse}>
              Cancelar
            </Button>
            </Box>
            </Grid>
      </Formulario>
       </main>  
  );
 }

export default App;
/*import React, {useState, Component} from 'react';
import './App.css';
import {Formulario, Label} from './elementos/Formularios';
import { InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { Grid  } from '@mui/material';

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

      //export default function CheckboxesGroup() {
        const [state, setState] = React.useState({
          Lunes: "Lunes",
          Martes: "Martes",
          Miercoles: "Miercoles",
          Jueves: "Jueves",
          Viernes: "Viernes",
          Sabado: "Sabado",
          Domingo: "Domingo",
          
        });
/*
        cancelCourse = () =>{
            this.setState({
                nameEmpresa:"",
                tipoEmpresa:"",
                descripción:"",
                dTrabaj:"",
                horaIni:"",
                horaFin:"",
                numCel:"",
                numtelef:"",
                direccion:"",
                email:"",
            })
        }
  *(/)    
        const handleChange = (event) => {
            setState({
              ...state,
              [event.target.name]: event.target.checked,
            });
          };
        
          const { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = state;
          const error = [Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo].filter((v) => v).length !== 2;
          
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
            />
              <br></br>
                <br></br>
                
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
              <br></br>
              <br></br>
              <br></br>
            
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
              <br></br>
              <br></br>
              
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
              <br></br>
              <br></br>
              
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
              <br></br>
              <br></br>
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
        </Formulario>
         </main>  
    );
   }
  
  export default App;
  */