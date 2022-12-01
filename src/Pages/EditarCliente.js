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
    const endpoint = 'https://food-offer-backend-production.up.railway.app/api/Usuario/'
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
    const [password2, cambiarPassword2] = useState({campo: '', valido: null});
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
    const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const update = async (e) => {
		e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre.campo,
            apellido: apellido.campo,
            edad: edad.campo,
			direccion: direccion.campo,
			celular: celular.campo,
            genero: genero.campo,
            ci:ci.campo,
            expedido: expedido.campo,
            email: email.campo,
			password:password.campo
        })
        navigate('/clientes')

        if(
			nombre.valido === 'true' &&
            apellido.valido === 'true' &&
			edad.valido === 'true' &&
			direccion.valido === 'true' &&
			celular.valido === 'true' &&
			genero.valido === 'true' &&
			ci.valido === 'true' &&
			expedido.valido === 'true' &&
            email.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true'
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
            cambiarPassword2({campo: '', valido: 'null'});

            const inputsT ={
				nombre:nombre.campo,
                apellido:apellido.campo,
				edad:Number(edad.campo),
				direccion:direccion.campo,
				celular:Number(celular.campo),
				genero:genero.campo,
				ci:Number(ci.campo),
			    expedido:expedido.campo,
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
            cambiarDireccion((obj)=>({...obj, campo:response.data.direccion}))
            cambiarNumeroCelular((obj)=>({...obj, campo:response.data.celular}))
            cambiarGenero((obj)=>({...obj, campo:response.data.genero}))
            cambiarCi((obj)=>({...obj, campo:response.data.ci}))
            cambiarExpedido((obj)=>({...obj, campo:response.data.expedido}))
			cambiarEmail((obj)=>({...obj, campo:response.data.password}))
			cambiarPassword((obj)=>({...obj, campo:response.data.password}))
            cambiarPassword2((obj)=>({...obj, campo:response.data.password}))
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
					label="Nombres*"
					placeholder="Ingrese sus nombres"
					name="nombres"
					leyendaError="El campo solo puede contener entre 3 a 30 letras y datos alfabeticos"
					expresionRegular={expresiones.nombre}
				/>
                <Input
					estado={apellido}
					cambiarEstado={ cambiarApellidos }
					tipo="text"
					label="Apellidos*"
					placeholder="ingrese sus apellidos"
					name="apellidos"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.apellido}
				/>

				<Input
					estado={edad}
					cambiarEstado={ cambiarEdad }
					tipo="text"
					label="Edad*"
					placeholder="Inserte su edad"
					name="edad"
					leyendaError="La descripcion solo puede contener datos numericos"
					expresionRegular={expresiones.edad}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Direccion*"
					placeholder="Ingrese la direccion de su empresa"
					name="direccion"
					leyendaError="Dato no valido solo se admiten datos alfanumericos"
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
					label="Genero*"
					placeholder="Femenino o Masculino"
					name="genero"
					leyendaError="solo se admiten datos alfabeticos "
					expresionRegular={expresiones.genero}
				/>
				
                <Input
					estado={ci}
					cambiarEstado={cambiarCi}
					tipo="text"
					label="Ci*"
					placeholder="ingrese el nro de su carnet de identidad"
					name="ci"
					leyendaError="solo es valido datos numericos "
					expresionRegular={expresiones.ci}
				/>
				<Input
					estado={expedido}
					cambiarEstado={cambiarExpedido }
					tipo="text"
					label="Expedido*"
					placeholder="ingrese donde fue expedido su ci"
					name="expedido"
					leyendaError="solo se admiten datos alfabeticos"
					expresionRegular={expresiones.expedido}
				/>
                <Input
					estado={email}
					cambiarEstado={cambiarEmail}
					tipo="text"
					label="Correo Electronico*"
					placeholder="ejemplo@gmail.com "
					name="correo"
					leyendaError="solo es valido un dato tipo correo ejemplo@gmail.com "
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
                <Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					placeholder="Repita la contraseña"
					tipo="password"
					label="Repetir Contraseña*"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> todos los campos son obligatorios ,se debe rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
				<Link to={`/clientes`} className='btn btn-warning'>Cancelar</Link>
                <Boton type='submit' className='btn btn-primary'>Guardar</Boton>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
				
			</Formulario>
		</main>
	);
 }
 
export default EditRegistroEmpresa; 
