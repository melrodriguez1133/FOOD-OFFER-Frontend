import { useState } from 'react'

function App() {
  const [inputs, setInputs] = useState({});
  const [inputFile, setInputFile] = useState({});

  const inputHandle = (e) => {
    setInputs((current) => {
      current[e.target.name] = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
      return current;
    });
  }

  const fileHandle = (e) => {
    setInputFile({
      'file': e.target.files[0],
      'name': e.target.files[0].name
    });
  }


  const actionForm = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('file', inputFile.file, inputFile.name);
    data.append('product', JSON.stringify(inputs));

    fetch('http://localhost:7200/FOOD-OFFER-Backend/backend/public/api/Producto', {
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <div className='contenedor'>
      <h2 className='titulo'>Formulario de ejemplo</h2>
      <form className='formulario' onSubmit={actionForm}>
        <input type="text" name='nombreProducto' placeholder='Nombre del producto' onChange={inputHandle} />
        <textarea onChange={inputHandle} name='descripcion' placeholder='Descripcion'></textarea>
        <input type="number" name='precio' placeholder='Precio' onChange={inputHandle} />
        <input type="text" name='fechaElaboracion' placeholder='fecha de elaboracion' onChange={inputHandle} />
        <input type="text" name='fechaVencimiento' placeholder='fecha de vencimiento' onChange={inputHandle} />
        <input type="text" name='fechaOferta' placeholder='fecha de oferta' onChange={inputHandle} />
        <input type="number" name='stock' placeholder='stock' onChange={inputHandle} />
        <input type="file" name='imagen' onChange={fileHandle} />
        <input type="number" name='id_categoria' placeholder='id categoria' onChange={inputHandle} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default App

