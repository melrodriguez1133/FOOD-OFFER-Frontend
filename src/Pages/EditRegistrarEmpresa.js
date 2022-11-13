import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import './EditRegistrarEmpresa.css';    

//import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Funciones/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
//import {Link} from "react-router-dom"
import useFetch from '../Hooks/useFetch';
import Input from '../Componentes/Input';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconName } from "react-icons/io5";

//const endpoint = 'http://localhost:8000/api/registrarEmpresas/'

/*const EditRegistrarEmpresa = () => {
    const [nombreEmpresa, setnombreEmpresa] = useState('')
    const [tipoNegocioE, settipoNegocioE] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [horariosAtencion, sethorariosAtencion] = useState('')
    const [diasAtencion, setdiasAtencion] = useState('')
    const [numeroCelular, setnumeroCelular] = useState()
    const [numeroTelefono, setnumeroTelefono] = useState()
    const [direccion, setdireccion] = useState('')
    const [correoEmpresa, setcorreoEmpresa] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombreEmpresa: nombreEmpresa,
            tipoNegocioE: tipoNegocioE,
            descripcion: descripcion,
            horariosAtencion: horariosAtencion,
            diasAtencion:diasAtencion,
            numeroCelular: numeroCelular,
            numeroTelefono: numeroTelefono,
            direccion: direccion,
            correoEmpresa: correoEmpresa
        })
        navigate('/empresa/empresa')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setnombreEmpresa(response.data.nombreEmpresa)
            settipoNegocioE(response.data.tipoNegocioE)
            setdescripcion(response.data.descripcion)
            sethorariosAtencion(response.data.horariosAtencion)
            setdiasAtencion(response.data.diasAtencion)
            setnumeroCelular(response.data.numeroCelular)
            setnumeroTelefono(response.data.numeroTelefono)
            setdireccion(response.data.direccion)
            setcorreoEmpresa(response.data.correoEmpresa)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <body className='body'>
        <div className="bodyDatos">
        <h3>Editar Empresa</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre de Empresa*</label>
                <input 
                    value={nombreEmpresa}
                    onChange={ (e)=> setnombreEmpresa(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Tipo de Empresa*</label>
                <input 
                    value={tipoNegocioE}
                    onChange={ (e)=> settipoNegocioE(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripción*</label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setdescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Horarios de Atención*</label>
                <input 
                    value={horariosAtencion}
                    onChange={ (e)=> sethorariosAtencion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Dias de Atención*</label>
                <input 
                    value={diasAtencion}
                    onChange={ (e)=> setdiasAtencion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Número de Celular*</label>
                <input 
                    value={numeroCelular}
                    onChange={ (e)=> setnumeroCelular(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Número de Teléfono*</label>
                <input 
                    value={numeroTelefono}
                    onChange={ (e)=> setnumeroTelefono(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Dirección*</label>
                <input 
                    value={direccion}
                    onChange={ (e)=> setdireccion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Correo de Empresa*</label>
                <input 
                    value={correoEmpresa}
                    onChange={ (e)=> setcorreoEmpresa(e.target.value)}
                    type='email'
                    className='form-control'
                />
            </div>
            <Link to={`/empresa/empresa`} className='btn btn-warning'>Cancelar</Link>

            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    </body>
    )
}*/

const EditRegistroEmpresa = () => {
    
	//const [products]=useFetch("http://127.0.0.1:8000/api/registrarEmpresas");
	//console.log(products);
    const endpoint = 'http://localhost:8000/api/registrarEmpresas/'

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
    const navigate = useNavigate()
    const {id} = useParams()

    const expresiones = {
		nombreEmpresa: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
        tipoNegocioE: /^[a-zA-ZÀ-ÿ\s]{7,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s,.]{15,250}$/, // Letras,numeros y espacios, pueden llevar acentos, puntos y comas.
		horariosAtencion: /^([0-2][0-9]:[0-5][0-9])(-)([0-2][0-9]:[0-5][0-9])$/,//hh:mm - hh:mm manejo 24h
        diasAtencion:/^[a-zA-Z\s-]{5,50}$/,//solo admite letras y guion
        numeroCelular:/^[0-9]{8}$/,//Solo admite telefono deben empezar con 6 o 7
        numeroTelefono:/^[0-9]{7}$/,//Solo admite telefono deben empezar con 4
        direccion:/^[a-zA-Z0-9\s#.,]{10,100}$/,//solo admite numeros,letras y espacio #.,
        correoEmpresa: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//solo admite correo electronico
	}

	const update = async (e) => {
		e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombreEmpresa: nombreEmpresa.campo,
            tipoNegocioE: tipoNegocioE.campo,
            descripcion: descripcion.campo,
            horariosAtencion: horariosAtencion.campo,
            diasAtencion:diasAtencion.campo,
            numeroCelular: numeroCelular.campo,
            numeroTelefono: numeroTelefono.campo,
            direccion: direccion.campo,
            correoEmpresa: correoEmpresa.campo
        })
        navigate('/empresa/empresa')

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
}}
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            cambiarNombreEmpresa((obj)=>({...obj, campo:response.data.nombreEmpresa}))
            cambiarTipoNegocioE((obj)=>({...obj, campo:response.data.tipoNegocioE}))
            cambiarDescripcion((obj)=>({...obj, campo:response.data.descripcion}))
            cambiarHorariosAtencion((obj)=>({...obj, campo:response.data.horariosAtencion}))
            cambiarDiasAtencion((obj)=>({...obj, campo:response.data.diasAtencion}))
            cambiarNumeroCelular((obj)=>({...obj, campo:response.data.numeroCelular}))
            cambiarNumeroTelefono((obj)=>({...obj, campo:response.data.numeroTelefono}))
            cambiarDireccion((obj)=>({...obj, campo:response.data.direccion}))
            cambiarCorreoEmpresa((obj)=>({...obj, campo:response.data.correoEmpresa}))
        }
        getProductById()
    }, [] )
    console.log(nombreEmpresa)
	return (
		<main>
			<h1>Editar Empresa</h1>
			<Formulario  onSubmit={update}>
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
					cambiarEstado={ cambiarTipoNegocioE }
					tipo="text"
					label="Tipo de Negocio*"
					placeholder="Ingrese el tipo de negocio"
					name="tipoNegocio"
					leyendaError="El campo solo puede contener datos alfabeticos y espacios"
					expresionRegular={expresiones.tipoNegocioE}
				/>

				<Input
					estado={descripcion}
					cambiarEstado={ cambiarDescripcion }
					tipo="text"
					label="Descripcion*"
					placeholder="Inserte una descripcion"
					name="descripcion"
					leyendaError="La descripcion solo puede contener datos alfanumericos y espacios,ademas comas y puntos"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={horariosAtencion}
					cambiarEstado={cambiarHorariosAtencion}
					tipo="text"
					label="Horarios de Atencion*"
					placeholder="Ingrese en el formato HH:MM-HH:MM"
					name="horariosAtencion"
					leyendaError="Solo es valido un dato tipo hora HH:MM-HH:MM"
					expresionRegular={expresiones.horariosAtencion}
				/>
				<Input
					estado={diasAtencion}
					cambiarEstado={cambiarDiasAtencion}
					tipo="text"
					label="Dias de Atencion*"
					placeholder="Ingrese los dias de atencion"
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
					leyendaError="Dato no valido, solo debe ingresar un numero de celular de 8 digitos"
					expresionRegular={expresiones.numeroCelular}
				/>
                <Input
					estado={numeroTelefono}
					cambiarEstado={cambiarNumeroTelefono}
					tipo="text"
					label="Numero de Telefono*"
					placeholder="00000000"
					name="telefono"
					leyendaError="Dato no valido, solo debe ingresar el numero de telefono de 8 digitos"
					expresionRegular={expresiones.numeroTelefono}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Direccion*"
					placeholder="Ingrese la direccion de su empresa"
					name="direccion"
					leyendaError="Dato no valido, solo se admiten datos alfanumericos"
					expresionRegular={expresiones.direccion}
				/>
				<Input
					estado={correoEmpresa}
					cambiarEstado={cambiarCorreoEmpresa }
					tipo="text"
					label="Correo Electronico*"
					placeholder="ejemplo@gmail.com"
					name="correo"
					leyendaError="Solo es valido un dato tipo correo: ejemplo@gmail.com "
					expresionRegular={expresiones.correoEmpresa}
				/>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> todos los campos son obligatorios ,se debe rellena el formulario correctamente.
					</p>
				</MensajeError>}
				
				<ContenedorBotonCentrado>
				<Link to={`/empresa/empresa`} className='btn btn-warning'>Cancelar</Link>
                <button type='submit' className='btn btn-primary'>Guardar</button>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
				<Link id="return" to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'><AiIcons.AiFillHome/></Link>
			</Formulario>
		</main>
	);
 }
 
export default EditRegistroEmpresa; 


/*

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
 
export default RegistroEmpresa;*/