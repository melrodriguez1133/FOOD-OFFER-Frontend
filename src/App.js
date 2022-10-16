import React, { useState } from 'react';
import './App.css';
import { Box, TextField, Grid, Card, CardContent, FormControl,  Select, MenuItem, InputLabel } from '@mui/material';
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
                <h4>Hora de atencion</h4>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl sx={{ width: '100%' }}>
                <TextField
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
                    label="Last Name"
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Campo obligatorio"
                  />

                </Grid>
                
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
              </Grid>
            </CardContent>
          </Card>

        </Box>

      </header>
    </div>
  );
}

export default App;
