import axios from 'axios'

const todosProductos  =  async (state)  => {
	const peticion = await axios.get('http://127.0.0.1:8000/api/Producto')
	state(peticion.data)
}

export{
	todosProductos
}