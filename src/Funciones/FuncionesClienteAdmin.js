import axios from 'axios'

const todosClientes  =  async (state)  => {
	const peticion = await axios.get('http://127.0.0.1:8000/api/Usuario')
	state(peticion.data)
}

export{
	todosClientes
}