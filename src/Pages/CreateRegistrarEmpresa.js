import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Funciones/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import useFetch from '../Hooks/useFetch';
import Input from '../Componentes/Input';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconName } from "react-icons/io5";

const RegistroEmpresa = () => {
    
	//const [products]=useFetch("http://127.0.0.1:8000/api/registrarEmpresas");
	//console.log(products);


	const [nombreEmpresa, cambiarNombreEmpresa] = useState({campo: '', valido: null});
    const [tipoNegocioE, cambiarTipoNegocioE] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [horariosAtencion, cambiarHorariosAtencion] = useState({campo: '', valido: null});
	const [diasAtencion, cambiarDiasAtencion] = useState({campo: '', valido: null});
	const [numeroCelular, cambiarNumeroCelular] = useState({campo: '', valido: null});
	const [numeroTelefono, cambiarNumeroTelefono] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [correoEmpresa, cambiarCorreoEmpresa] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombreEmpresa: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
        tipoNegocioE: /^[a-zA-ZÀ-ÿ\s]{7,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s,.]{25,250}$/, // Letras,numeros y espacios, pueden llevar acentos, puntos y comas.
		horariosAtencion: /^([0-2][0-9]:[0-5][0-9])(-)([0-2][0-9]:[0-5][0-9])$/,//hh:mm - hh:mm manejo 24h
        diasAtencion:/^[a-zA-Z\s-]{5,50}$/,//solo ademite letras y guion
        numeroCelular:/^[0-9]{8}$/,//Solo admite telefono deben empezar con 6 o 7
        numeroTelefono:/^[0-9]{7}$/,//Solo admite telefono deben empezar con 4
        direccion:/^[a-zA-Z0-9\s#.,]{12,100}$/,//solo admite numeros,letras y espacio #.,
        correoEmpresa: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//solo admite correo electronico
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombreEmpresa.valido === 'true' &&
            tipoNegocioE.valido === 'true' &&
			descripcion.valido === 'true' &&
			horariosAtencion.valido === 'true' &&
			diasAtencion.valido === 'true' &&
			numeroCelular.valido === 'true' &&
			numeroTelefono.valido === 'true' &&
			direccion.valido === 'true' &&
            correoEmpresa.valido === 'true'
		){
			cambiarFormularioValido(true);
			cambiarNombreEmpresa({campo: '', valido: null});
            cambiarTipoNegocioE({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});
			cambiarHorariosAtencion({campo: '', valido: null});
			cambiarDiasAtencion({campo: '', valido: null});
			cambiarNumeroCelular({campo: '', valido: null});
			cambiarNumeroTelefono({campo: '', valido: null});
			cambiarDireccion({campo: '', valido: null});
            cambiarCorreoEmpresa({campo: '', valido: null});

            const inputsT ={
				nombreEmpresa:nombreEmpresa.campo,
                tipoNegocioE:tipoNegocioE.campo,
				descripcion:descripcion.campo,
				horariosAtencion:horariosAtencion.campo,
				diasAtencion:diasAtencion.campo,
				numeroCelular:Number(numeroCelular.campo),
			    numeroTelefono:Number(numeroTelefono.campo),
				direccion:direccion.campo,
                correoEmpresa:correoEmpresa.campo
				
			}
	
			console.log(inputsT);
			fetch('http://127.0.0.1:8000/api/registrarEmpresas', {
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
			<h1>Registrar Empresa</h1>
			<Formulario action="" onSubmit={onSubmit}>
			<Input
					estado={nombreEmpresa}
					cambiarEstado={cambiarNombreEmpresa}
					tipo="text"
					label="Nombre de la Empresa*"
					placeholder="Ingrese el nombre de su Empresa"
					name="empresa"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.nombreEmpresa}
				/>
                <Input
					estado={tipoNegocioE}
					cambiarEstado={cambiarTipoNegocioE}
					tipo="text"
					label="Tipo de Negocio*"
					placeholder="ingrese el tipo de negocio"
					name="tipoNegocio"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.tipoNegocioE}
				/>

				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripcion*"
					placeholder="inserte una descripcion"
					name="descripcion"
					leyendaError="La descripcion solo puede contener datos alfanumericos y espacios,ademas comas y puntos"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={horariosAtencion}
					cambiarEstado={cambiarHorariosAtencion}
					tipo="text"
					label="Horarios de Atencion*"
					placeholder="ingrese rn el formato HH:MM-HH:MM"
					name="horariosAtencion"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa "
					expresionRegular={expresiones.horariosAtencion}
				/>
				<Input
					estado={diasAtencion}
					cambiarEstado={cambiarDiasAtencion}
					tipo="text"
					label="Dias de Atencion*"
					placeholder="ingrese los dias de atencion"
					name="diasAtencion"
					leyendaError="solo es valido con datos alfabeticos "
					expresionRegular={expresiones.diasAtencion}
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
					estado={numeroTelefono}
					cambiarEstado={cambiarNumeroTelefono}
					tipo="text"
					label="Numero de Telefono*"
					placeholder="00000000"
					name="telefono"
					leyendaError="Dato no valido solo debe ingresar el numero de telefono de 8 de tamaño "
					expresionRegular={expresiones.numeroTelefono}
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
					estado={correoEmpresa}
					cambiarEstado={cambiarCorreoEmpresa}
					tipo="text"
					label="Correo Electronico*"
					placeholder="ejemplo@gmail.com "
					name="correo"
					leyendaError="solo es valido un dato tipo correo ejemplo@gmail.com "
					expresionRegular={expresiones.correoEmpresa}
				/>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> todos los campos son obligatorios ,se debe rellena el formulario correctamente.
					</p>
				</MensajeError>}
				
				<ContenedorBotonCentrado>
				<Link to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Cancelar</Link>
				<Boton type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white' >Registrar</Boton>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
				<Link id="return" to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'><AiIcons.AiFillHome/></Link>
			</Formulario>
		</main>
	);
}
 
export default RegistroEmpresa;