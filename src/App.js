import React from 'react';
import imagfoodre from './imagfoodre.png';
import './App.css';

function App() {
  return (
  <header>
    <body>
      <div id="imagComida">
      <img src={imagfoodre} class="imag" alt="logo" />
      </div>
      <div id="moveform">
          <lightning-card  id="tamform">
            <form>


            </form>
           </lightning-card>
        </div>
    </body>
  </header>
  );
}

export default App;
