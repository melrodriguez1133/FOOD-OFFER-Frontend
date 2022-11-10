import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import './EditRegistrarEmpresa.css';

const endpoint = 'http://localhost:8000/api/producto/'

const EditProduct = () => {
    const [nombreProducto, setnombreProducto] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [precio, setprecio] = useState('')
    const [fechaElaboracion, setfechaElaboracion] = useState('')
    const [fechaVencimiento, setfechaVencimiento] = useState('')
    const [fechaOferta, setfechaOferta] = useState()
    const [stock, setstock] = useState()
    const [imagen, setimagen] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombreProducto: nombreProducto,
            descripcion: descripcion,
            precio: precio,
            fechaElaboracion: fechaElaboracion,
            fechaVencimiento:fechaVencimiento,
            fechaOferta: fechaOferta,
            stock: stock,
            imagen: imagen,
        })
        navigate('/empresa/productos-empresa')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setnombreProducto(response.data.nombreProducto)
            setdescripcion(response.data.descripcion)
            setprecio(response.data.precio)
            setfechaElaboracion(response.data.fechaElaboracion)
            setfechaVencimiento(response.data.fechaVencimiento)
            setfechaOferta(response.data.fechaOferta)
            setstock(response.data.stock)
            setimagen(response.data.imagen)
            }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <body className='body'>
        <div className="bodyDatos">
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre*</label>
                <input 
                    value={nombreProducto}
                    onChange={ (e)=> setnombreProducto(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Categoria de producto*</label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setdescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripción*</label>
                <input 
                    value={precio}
                    onChange={ (e)=> setprecio(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha de Vencimiento*</label>
                <input 
                    value={fechaElaboracion}
                    onChange={ (e)=> setfechaElaboracion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha de elaboración*</label>
                <input 
                    value={fechaVencimiento}
                    onChange={ (e)=> setfechaVencimiento(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Précio*</label>
                <input 
                    value={fechaOferta}
                    onChange={ (e)=> setfechaOferta(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cantida disponible*</label>
                <input 
                    value={stock}
                    onChange={ (e)=> setstock(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Imagen*</label>
                <input 
                    value={imagen}
                    onChange={ (e)=> setimagen(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            
            <Link to={`/empresa/productos-empresa`} className='btn btn-warning'>Cancelar</Link>

            <button type='submit' className='btn btn-primary'>Confirmar</button>
        </form>
    </div>
    </body>
    )
}

export default EditProduct