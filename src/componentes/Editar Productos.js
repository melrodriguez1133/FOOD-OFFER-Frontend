import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import './EditRegistrarEmpresa.css';

const endpoint = 'http://localhost:8000/api/registrarEmpresas/'

const EditProduct = () => {
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
        navigate('/')
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
        <div className='imagenEmpresa'>
                <img className='imagen' src="\Restaurante.jpeg"/>
        </div>
        <div className="bodyDatos">
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre*</label>
                <input 
                    value={nombreEmpresa}
                    onChange={ (e)=> setnombreEmpresa(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Categoria de producto*</label>
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
                <label className='form-label'>Fecha de Vencimiento*</label>
                <input 
                    value={horariosAtencion}
                    onChange={ (e)=> sethorariosAtencion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha de elaboración*</label>
                <input 
                    value={diasAtencion}
                    onChange={ (e)=> setdiasAtencion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Précio*</label>
                <input 
                    value={numeroCelular}
                    onChange={ (e)=> setnumeroCelular(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cantida disponible*</label>
                <input 
                    value={numeroTelefono}
                    onChange={ (e)=> setnumeroTelefono(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Imagen*</label>
                <input 
                    value={direccion}
                    onChange={ (e)=> setdireccion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha limite de oferta*</label>
                <input 
                    value={correoEmpresa}
                    onChange={ (e)=> setcorreoEmpresa(e.target.value)}
                    type='email'
                    className='form-control'
                />
            </div>
            <Link to={`/`} className='btn btn-warning'>Cancelar</Link>

            <button type='submit' className='btn btn-primary'>Confirmar</button>
        </form>
    </div>
    </body>
    )
}

export default EditProduct