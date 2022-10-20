import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const endpoint = 'http://localhost:5200/api'

const ShowRegistrarEmpresas = () => {
    const [products, setnombreEmpresa] = useState( [] )
    useEffect (()=>{
        getAllProducts()
    }, [])
    //const [count, setCount] = useState(0)

    const getAllProducts = async()=>{
        const response = await axios.get(`${endpoint}/registrarEmpresas`)
        setnombreEmpresa(response.data)
        //console.log(response.data)
    }

    const deleteRegistrarEmpresas = async (id) =>{
        await axios.delete(`${endpoint}/registrarEmpresas/${id}`)
        getAllProducts()
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>nombreEmpresa</th>
                    <th>tipoNegocioE</th>
                    <th>descripcion</th>
                    <th>horariosAtencion</th>
                    <th>diasAtencion</th>
                    <th>numeroCelular</th>
                    <th>numeroTelefono</th>
                    <th>direccion</th>
                    <th>correoEmpresa</th>
                </tr>
            </thead>
            <tbody>
                {products.map((products) => (
                    <tr key={products.id}>
                        <td>{products.nombreEmpresa}</td>
                        <td>{products.tipoNegocioE}</td>
                        <td>{products.descripcion}</td>
                        <td>{products.horariosAtencion}</td>
                        <td>{products.diasAtencion}</td>
                        <td>{products.numeroCelular}</td>
                        <td>{products.numeroTelefono}</td>
                        <td>{products.direccion}</td>
                        <td>{products.correoEmpresa}</td>
                        <td>
                            <Link to={`/edit/${products.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=>deleteRegistrarEmpresas(products.id) } className='btn btn-danger'>Borrar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowRegistrarEmpresas