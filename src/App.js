import React from 'react';
import imagfoodre from './imagfoodre.png';
import './App.css';
import { TextField } from '@material-ui/core';
function App() {
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
                  <TextField
                  error={false}
                  label="Descripcion"
                  multiline
                  rows={5}
                  type="text"
                  name="descripcion"
                  margin="dense"
                  fullWidth
                  variant="outlined"> 
                   buscar
                  </TextField>

            </form>
           </lightning-card>
        </div>
    </body>
  </header>
  );
}

export default App;
