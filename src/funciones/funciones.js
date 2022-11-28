import axios from 'axios'

const todosProductos  =  async (state)  => {
	const peticion = await axios.get('http://localhost:3004/Clientes')
	state(peticion.data)
}

export{
	todosProductos
}