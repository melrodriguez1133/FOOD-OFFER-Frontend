import axios from 'axios'

const todosProductos  =  async (state)  => {
	const peticion = await axios.get('https://isbackend-production.up.railway.app/api/Producto')
	state(peticion.data)
}

export{
	todosProductos
}