import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './VistaClientesProfileAdmin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import { faEdit, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import imagenUser from '../userImage.jpg';

const VisualizarEmpresa = () => {

    const { id } = useParams();
    const [Empresa, setEmpresa] = useState([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/registrarEmpresas/${id}`).then((res) => {
          setEmpresa(res.data);
        });
      }, []);

    console.log({Empresa});
  return (
  <div className='body'>
    <div className ='container mt-5'>
    <div className ='row d-flex justify-content-center'>
        <div className='col-md-7'>
            <div className='card p-3 py-4'>
                <div className='text-center'>
                    <img src={imagenUser} className="rounded-circle"/>
                </div>
                
                <div className='text-center mt-3'>
                    <span className='bg-secondary p-1 px-4 rounded text-white'>Empresa</span>
                    <h5 class="mt-2">{Empresa.nombreEmpresa}</h5>              
                        <div className='card-block'>
                          <h6 className='m-b-20 p-b-5 b-b-default f-w-600'>Información</h6>
                          <div className='row'>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Tipo de Negocio</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.tipoNegocioE}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Descripcion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.descripcion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Horarios de Atencion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.horariosAtencion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Dias de Atencion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.diasAtencion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Numero de Celular</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.numeroCelular}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Numero de Telefono</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.numeroTelefono}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Direccion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.direccion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Correo</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.correoEmpresa}</h6>
                              </div>
                          </div>
                        </div>

                     <ul className='social-list'>
                        <li><FontAwesomeIcon icon={faLocationDot}/></li>
                        <li><FontAwesomeIcon icon={faEnvelope}/></li>
                        <li><FontAwesomeIcon icon={faPhone}/></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default VisualizarEmpresa;
/*import axios from "axios";
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
    const endpoint = 'http://127.0.0.1:8000/api/registrarEmpresas/'
	//'https://isbackend-production.up.railway.app/api/registrarEmpresas/'

	const [nombreEmpresa, cambiarNombreEmpresa] = useState({campo: '', valido: null});
    const [tipoNegocioE, cambiarTipoNegocioE] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [horariosAtencion, cambiarHorariosAtencion] = useState({campo: '', valido: null});
	const [diasAtencion, cambiarDiasAtencion] = useState({campo: '', valido: null});
	const [numeroCelular, cambiarNumeroCelular] = useState({campo: '', valido: null});
	const [numeroTelefono, cambiarNumeroTelefono] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [correoEmpresa, cambiarCorreoEmpresa] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
    const navigate = useNavigate()
    const {id} = useParams()

    const expresiones = {
		nombreEmpresa: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
        tipoNegocioE: /^[a-zA-ZÀ-ÿ\s]{7,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s,.]{25,250}$/, // Letras,numeros y espacios, pueden llevar acentos, puntos y comas.
		horariosAtencion: /^([0-2][0-9]:[0-5][0-9])(-)([0-2][0-9]:[0-5][0-9])$/,//hh:mm - hh:mm manejo 24h
        diasAtencion:/^[a-zA-Z\s-]{5,50}$/,//solo admite letras y guion
        numeroCelular:/^[0-9]{8}$/,//Solo admite telefono deben empezar con 6 o 7
        numeroTelefono:/^[0-9]{7}$/,//Solo admite telefono deben empezar con 4
        direccion:/^[a-zA-Z0-9\s#.,]{10,100}$/,//solo admite numeros,letras y espacio #.,
        correoEmpresa: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//solo admite correo electronico
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
            nombreEmpresa: nombreEmpresa.campo,
            tipoNegocioE: tipoNegocioE.campo,
            descripcion: descripcion.campo,
            horariosAtencion: horariosAtencion.campo,
            diasAtencion:diasAtencion.campo,
            numeroCelular: numeroCelular.campo,
            numeroTelefono: numeroTelefono.campo,
            direccion: direccion.campo,
            correoEmpresa: correoEmpresa.campo,
			password:password.campo
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
            correoEmpresa.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' 
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
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});


            const inputsT ={
				nombreEmpresa:nombreEmpresa.campo,
                tipoNegocioE:tipoNegocioE.campo,
				descripcion:descripcion.campo,
				horariosAtencion:horariosAtencion.campo,
				diasAtencion:diasAtencion.campo,
				numeroCelular:Number(numeroCelular.campo),
			    numeroTelefono:Number(numeroTelefono.campo),
				direccion:direccion.campo,
                correoEmpresa:correoEmpresa.campo,
				password:password.campo
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
			cambiarPassword((obj)=>({...obj, campo:response.data.password}))
			cambiarPassword2((obj)=>({...obj, campo:response.data.password}))
        }
        getProductById()
    }, [] )
    console.log(nombreEmpresa)
	return (
		<main>
			<h1>Empresa</h1>
			<Formulario  onSubmit={update}>
			<Input
                    
					estado={nombreEmpresa}

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
					placeholder="0000000"
					name="telefono"
					leyendaError="Dato no valido, solo debe ingresar el numero de telefono de 7 digitos"
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
				
				
			</Formulario>
		</main>
	);
 }
 
export default EditRegistroEmpresa; */
/*<ContenedorBotonCentrado>
				<Link to={`/empresa/empresa`} className='btn btn-warning'>Cancelar</Link>
                <Boton type='submit' className='btn btn-primary'>Guardar</Boton>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado> */