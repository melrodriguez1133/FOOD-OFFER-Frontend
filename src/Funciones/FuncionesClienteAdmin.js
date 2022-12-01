import axios from 'axios'

const todosClientes  =  async (state)  => {
	const peticion = await axios.get('https://food-offer-backend-production.up.railway.app/api/Usuario/')
	state(peticion.data)
}

export{
	todosClientes
}