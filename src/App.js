import React, { useState } from 'react';
import './App.css';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { 
  Box,
  TextField,
  Checkbox, 
  Grid, 
  Card, 
  CardContent, 
  FormControl, 
  Select, 
  MenuItem, 
  InputLabel,
  FormControlLabel,
  FormGroup
} from '@mui/material';
import { LoadingButton } from '@mui/lab'



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


  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nameEmpresa: '',
    tipoEmpresa: 0,
    descripcion:'',
    horaIni:'',
    horaFin:'',
    direccion:'',
    nroCelular:'',
    nroTelefono:'',
    email: ''
  });

  const { nameEmpresa,tipoEmpresa,descripcion,horaIni,horaFin,direccion,nroCelular,nroTelefono,email} = formData;

  const handleOnchange = (e) => {
    console.log([e.target.name], e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (nameEmpresa,tipoEmpresa, descripcion,horaIni,horaFin,direccion,nroCelular,nroTelefono,email) => {
    console.log(nameEmpresa,tipoEmpresa,descripcion, horaIni,horaFin,descripcion,nroCelular,nroTelefono,email);
    setLoading(true)
    alert(`datos formularios:, ${nameEmpresa},${tipoEmpresa},${descripcion},${horaIni},${horaFin},${direccion},${nroCelular},${nroTelefono},${email}`)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  return (
    <div className="App">
      <header className="App-header">
       
        <Box my={2}>
          <Card>
            <CardContent>
              <h2>Editar datos de la empresa</h2>
              <Grid container direction="row" spacing={2}>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl sx={{ width: '100%' }}>
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
                  </FormControl>
                </Grid>



                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl sx={{ width: '100%' }}>
                  <TextField
                  required
                  error={false}
                  label="Descripcion"
                  type="text"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleOnchange}
                  margin="dense"
                  fullWidth
                  variant="outlined"
                   /> 
                  </FormControl>
                </Grid>

              
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <label className="label">Horarios de Trabajo </label>
                 <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lunes" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Martes" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Miercoles" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Jueves" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Viernes" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Sabado" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Domingo" />
                </FormGroup>
                </Grid>

                <h4>Hora de atencion</h4>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl sx={{ width: '100%' }}>
                <TimePicker
                   required
                    id="time"
                   label="Hora Apertura"
                   type="time"
                   name="horaIni"
                    value={horaIni}
                  onChange={handleOnchange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                   />
                   </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl sx={{ width: '100%' }}>
                <TextField
                    required
                    id="time"
                   label="Hora Cierre"
                   type="time"
                   name="horaFin"
                    value={horaFin}
                  onChange={handleOnchange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                   />
                   </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Direccion"
                    type="texto"
                    name="direccion"
                    value={direccion}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Numero de celular"
                    type="number"
                    name="nroCelular"
                    value={nroCelular}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Numero de Telefono"
                    type="number"
                    name="nroTelefono"
                    value={nroTelefono}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Correo Electronico"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box sx={{ '& > button': { m: 1 } }}>
                    <LoadingButton
                      size="medium"
                      onClick={() => handleSubmit(nameEmpresa, tipoEmpresa,descripcion,horaIni,horaFin,direccion,nroCelular,nroTelefono,email)}
                      loading={loading}
                      variant="outlined"
                      disabled={!loading ? false : true}
                    >
                      Enviar
                    </LoadingButton>

                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

        </Box>

      </header>
    </div>
  );
}

export default App;
