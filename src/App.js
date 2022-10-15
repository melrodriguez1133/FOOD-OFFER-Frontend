import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
// material-ui

import {
    Button,
    TextField,
    OutlinedInput,
    Checkbox ,
    ListItemText,
} from '@mui/material';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />



function App() {


   return (
    <div className="App">
      <header className="App-header">
      <form>
      
      <TextField id="outlined-basic" label="Nombre de la empresa" variant="outlined" />
      
      <br></br>

      <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Tipo de negocio</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Tipo de negocios"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Cafeteria</MenuItem>
          <MenuItem value={20}>Comercial</MenuItem>
          <MenuItem value={30}>RestauranteS</MenuItem>
        </Select>
      </FormControl>

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

    <TextField
    id="time"
    label="Alarm clock"
    type="time"
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />


  <TextField
    id="time"
    label="Alarm clock"
    type="time"
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />

<br></br>

<Button variant="contained" color="secondary">
  Cancelar
</Button>

<Button variant="contained" color="primary">
  Guardar
</Button>


       
      </form>
      </header>
    </div>
  );  
  
  }

export default App;
