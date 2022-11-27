import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import './EditRegistrarEmpresa.css';    

import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Funciones/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../Componentes/Input';


const EditRegistroEmpresa = () => {
    
	//const [products]=useFetch("http://127.0.0.1:8000/api/registrarEmpresas");
	//console.log(products);
    const endpoint = 'http://127.0.0.1:8000/api/Usuario/'
	//'https://isbackend-production.up.railway.app/api/registrarEmpresas/'

	const [nombre, cambiarNombres] = useState({campo: '', valido: null});
    const [apellido, cambiarApellidos] = useState({campo: '', valido: null});
	const [edad, cambiarEdad] = useState({campo: '', valido: null});
    const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [celular, cambiarNumeroCelular] = useState({campo: '', valido: null});
	const [genero, cambiarGenero] = useState({campo: '', valido: null});
	const [ci, cambiarCi] = useState({campo: '', valido: null});
    const [expedido, cambiarExpedido] = useState({campo: '', valido: null});
    const [email, cambiarEmail] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
    const navigate = useNavigate()
    const {id} = useParams()

    const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{3,30}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        edad:/^[0-9]{2}$/,//solo admite edades de 2 digitos
        direccion:/^[a-zA-Z0-9\s#.,]{15,50}$/,//solo admite numeros,letras y espacio #.,
        celular:/^[0-9]{8}$/,//Solo admite telefono deben empezar con 6 o 7
        ci:/^[0-9]{6,10}$/,//Solo admite telefono deben empezar con 4
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//solo admite correo electronico
		password: /^.{4,12}$/, // 4 a 12 digitos.
	}

	const update = async (e) => {
		e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre.campo,
            apellido: apellido.campo,
            edad: edad.campo,
            genero: genero.campo,
            ci:ci.campo,
            celular: celular.campo,
            expedido: expedido.campo,
            direccion: direccion.campo,
            email: email.campo,
			password:password.campo
        })
        navigate('/empresa/empresa')

        if(
			nombre.valido === 'true' &&
            apellido.valido === 'true' &&
			edad.valido === 'true' &&
			genero.valido === 'true' &&
			ci.valido === 'true' &&
			celular.valido === 'true' &&
			expedido.valido === 'true' &&
			direccion.valido === 'true' &&
            email.valido === 'true' &&
			password.valido === 'true' 
		){
			cambiarFormularioValido(true);
			cambiarNombres({campo: '', valido: null});
            cambiarApellidos({campo: '', valido: null});
			cambiarEdad({campo: '', valido: null});
			cambiarDireccion({campo: '', valido: null});
			cambiarNumeroCelular({campo: '', valido: null});
			cambiarGenero({campo: '', valido: null});
			cambiarCi({campo: '', valido: null});
			cambiarExpedido({campo: '', valido: null});
            cambiarEmail({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});


            const inputsT ={
				nombre:nombre.campo,
                apellido:apellido.campo,
				edad:Number(edad.campo),
				genero:genero.campo,
				ci:Number(ci.campo),
				celular:Number(celular.campo),
			    expedido:expedido.campo,
				direccion:direccion.campo,
                email:email.campo,
				password:password.campo
	}
    console.log(inputsT);
}}
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            cambiarNombres((obj)=>({...obj, campo:response.data.nombre}))
            cambiarApellidos((obj)=>({...obj, campo:response.data.apellido}))
            cambiarEdad((obj)=>({...obj, campo:response.data.edad}))
            cambiarDireccion((obj)=>({...obj, campo:response.data.genero}))
            cambiarNumeroCelular((obj)=>({...obj, campo:response.data.celular}))
            cambiarGenero((obj)=>({...obj, campo:response.data.ci}))
            cambiarCi((obj)=>({...obj, campo:response.data.expedido}))
            cambiarExpedido((obj)=>({...obj, campo:response.data.email}))
			cambiarEmail((obj)=>({...obj, campo:response.data.password}))
			cambiarPassword((obj)=>({...obj, campo:response.data.password}))
        }
        getProductById()
    }, [] )
    console.log(nombre)
	return (
		<main>
			<h1>Usuario</h1>
			<Formulario  onSubmit={update}>
			<Input
                    
					estado={nombre}
					cambiarEstado={cambiarNombres}
					tipo="text"
					label="Nombre de la Empresa*"
					placeholder="Ingrese el nombre de su Empresa"
					name="empresa"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.nombre}
				/>
                <Input
					estado={apellido}
					cambiarEstado={ cambiarApellidos }
					tipo="text"
					label="Tipo de Negocio*"
					placeholder="Ingrese el tipo de negocio"
					name="tipoNegocio"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.apellido}
				/>

				<Input
					estado={edad}
					cambiarEstado={ cambiarEdad }
					tipo="text"
					label="Descripcion*"
					placeholder="Inserte una edad"
					name="edad"
					leyendaError="La edad solo puede contener datos alfanumericos y espacios,ademas comas y puntos"
					expresionRegular={expresiones.edad}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Horarios de Atencion*"
					placeholder="Ingrese en el formato HH:MM-HH:MM"
					name="genero"
					leyendaError="Solo es valido un dato tipo hora HH:MM-HH:MM"
					expresionRegular={expresiones.direccion}
				/>
                <Input
					estado={celular}
					cambiarEstado={cambiarNumeroCelular}
					tipo="text"
					label="Numero de Celular*"
					placeholder="00000000"
					name="celular"
					leyendaError="Dato no valido, solo debe ingresar un numero de celular de 8 digitos"
					expresionRegular={expresiones.celular}
				/>
				<Input
					estado={genero}
					cambiarEstado={cambiarGenero}
					tipo="text"
					label="Dias de Atencion*"
					placeholder="Ingrese los dias de atencion"
					name="ci"
					leyendaError="solo es valido con datos alfabeticos "
					expresionRegular={expresiones.genero}
				/>
				
                <Input
					estado={ci}
					cambiarEstado={cambiarCi}
					tipo="text"
					label="Numero de Telefono*"
					placeholder="0000000"
					name="telefono"
					leyendaError="Dato no valido, solo debe ingresar el numero de telefono de 7 digitos"
					expresionRegular={expresiones.ci}
				/>
				<Input
					estado={expedido}
					cambiarEstado={cambiarExpedido }
					tipo="text"
					label="Correo Electronico*"
					placeholder="ejemplo@gmail.com"
					name="correo"
					leyendaError="Solo es valido un dato tipo correo: ejemplo@gmail.com "
					expresionRegular={expresiones.expedido}
				/>
                <Input
					estado={email}
					cambiarEstado={cambiarEmail}
					placeholder="Repita la contraseña"
					tipo="password"
					label="Repetir Contraseña*"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={expresiones.email}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					placeholder="Ingrese una contraseña"
					tipo="password"
					label="Contraseña*"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> todos los campos son obligatorios ,se debe rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
				<Link to={`/empresa/empresa`} className='btn btn-warning'>Cancelar</Link>
                <Boton type='submit' className='btn btn-primary'>Guardar</Boton>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
				
			</Formulario>
		</main>
	);
 }
 
export default EditRegistroEmpresa; 
