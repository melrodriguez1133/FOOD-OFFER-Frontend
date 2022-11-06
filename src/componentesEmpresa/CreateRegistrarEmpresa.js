import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateRegistrarEmpresa.css';
import {Link} from "react-router-dom"

const endpoint = 'http://localhost:8000/api/registrarEmpresas'

const CreateProduct = () => {
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

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
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
        navigate('/empresa/registrar-empresa/create')
    }
    
  return (
    <body className='body'>
        <div className='imagenEmpresa'>
                <img className='imagen' src="Restaurante.jpeg"/>
        </div>  
        <div className='bodyDatos'>  
            <h3>Registrar Empresa</h3>
            <form onSubmit={store}>
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
            <Link to={`/`} className='btn btn-warning'>Cancelar</Link>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    </body>
  )
}

export default CreateProduct;