import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Funciones/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import Input from '../Componentes/Input';
import { useNavigate} from "react-router-dom";

const RegistroEmpresa = () => {
    
	//const [products]=useFetch("http://127.0.0.1:8000/api/registrarEmpresas");
	//console.log(products);


	const [nombres, cambiarNombres] = useState({campo: '', valido: null});
    const [apellidos, cambiarApellidos] = useState({campo: '', valido: null});
	const [edad, cambiarEdad] = useState({campo: '', valido: null});
    const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [numeroCelular, cambiarNumeroCelular] = useState({campo: '', valido: null});
	const [genero, cambiarGenero] = useState({campo: '', valido: null});
	const [ci, cambiarCi] = useState({campo: '', valido: null});
    const [expedido, cambiarExpedido] = useState({campo: '', valido: null});
    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
    //const navigate = useNavigate()

	const expresiones = {
		nombres: /^[a-zA-ZÀ-ÿ\s]{3,30}$/, // Letras y espacios, pueden llevar acentos.
        apellidos: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        edad:/^[0-9]{2}$/,//solo admite edades de 2 digitos
		genero: /^[a-zA-Z]{1,10}$/,
        direccion:/^[a-zA-Z0-9\s#.,]{15,50}$/,//solo admite numeros,letras y espacio #.,
        numeroCelular:/^[0-9]{8}$/,//Solo admite telefono deben empezar con 6 o 7
        ci:/^[0-9]{6,10}$/,//Solo admite telefono deben empezar con 4
		expedido:/^[a-zA-Z]{3,15}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//solo admite correo electronico
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

	const onSubmit = (e) => {
		e.preventDefault();
        //navigate('/cliente')
		if(
			nombres.valido === 'true' &&
            apellidos.valido === 'true' &&
			edad.valido === 'true' &&
			direccion.valido === 'true' &&
			numeroCelular.valido === 'true' &&
			genero.valido === 'true' &&
			ci.valido === 'true' &&
            expedido.valido === 'true' &&
            correo.valido === 'true' &&
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
            cambiarCorreo({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});

            const inputsT ={
				nombre:nombres.campo,
                apellido:apellidos.campo,
                edad:Number(edad.campo),
                direccion:direccion.campo,
                celular:Number(numeroCelular.campo),
				genero:genero.campo,
				ci:Number(ci.campo),
				expedido:expedido.campo,
                email:correo.campo,
				password:password.campo
			}
	
			console.log(inputsT);

			fetch('https://food-offer-backend-production.up.railway.app/api/Usuario/', {
				method: "POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(inputsT)
			})
			.then(res => res.json())
			.then(data => console.log(data)); 
		    } else {
			cambiarFormularioValido(false);
					
		}
	}

	return (
		<main>
			<h1>Registrar Cliente</h1>
			<Formulario action="" onSubmit={onSubmit}>
			<Input
					estado={nombres}
					cambiarEstado={cambiarNombres}
					tipo="text"
					label="Nombres*"
					placeholder="Ingrese sus nombres"
					name="nombres"
					leyendaError="El campo solo puede contener entre 3 a 30 letras y datos alfabeticos"
					expresionRegular={expresiones.nombres}
				/>
                <Input
					estado={apellidos}
					cambiarEstado={cambiarApellidos}
					tipo="text"
					label="Apellidos*"
					placeholder="ingrese sus apellidos"
					name="apellidos"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.apellidos}
				/>

				<Input
					estado={edad}
					cambiarEstado={cambiarEdad}
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
					estado={numeroCelular}
					cambiarEstado={cambiarNumeroCelular}
					tipo="text"
					label="Numero de Celular*"
					placeholder="00000000"
					name="celular"
					leyendaError="Dato no valido solo debe ingresar el numero de celular de 8 de tamaño "
					expresionRegular={expresiones.numeroCelular}
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
					cambiarEstado={cambiarExpedido}
					tipo="text"
					label="Expedido*"
					placeholder="ingrese donde fue expedido su ci"
					name="expedido"
					leyendaError="solo se admiten datos alfabeticos"
					expresionRegular={expresiones.expedido}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="text"
					label="Correo Electronico*"
					placeholder="ejemplo@gmail.com "
					name="correo"
					leyendaError="solo es valido un dato tipo correo ejemplo@gmail.com "
					expresionRegular={expresiones.correo}
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
				<Link to="/clientes" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Cancelar</Link>
				<Boton type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white' >Registrar</Boton>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
				 
			</Formulario>
		</main>
	);
}
 
export default RegistroEmpresa;