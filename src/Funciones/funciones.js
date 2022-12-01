import axios from 'axios'

const todosProductos  =  async (state)  => {
	const peticion = await axios.get('https://food-offer-backend-production.up.railway.app/api/Producto')
	state(peticion.data)
}

export{
	todosProductos
}