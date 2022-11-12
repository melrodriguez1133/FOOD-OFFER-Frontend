import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const endpoint = 'http://localhost:8000/api'

const ShowRegistrarEmpresas = () => {
    const [RegistrarEmpresas, setnombreEmpresa] = useState( [] )
    useEffect (()=>{
        getAllRegistrarEmpresas()
    }, [])
    //const [count, setCount] = useState(0)

    const getAllRegistrarEmpresas = async()=>{
        const response = await axios.get(`${endpoint}/registrarEmpresas`)
        setnombreEmpresa(response.data)
        //console.log(response.data)
    }

    const deleteRegistrarEmpresas = async (id) =>{
        await axios.delete(`${endpoint}/registrarEmpresas/${id}`)
        getAllRegistrarEmpresas()
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/empresa/registrar-empresa/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre de Empresa</th>
                    <th>Tipo de Negocio</th>
                    <th>Descripción</th>
                    <th>Horarios de atención</th>
                    <th>Dias de atención</th>
                    <th>Número de celular</th>
                    <th>Número de telefono</th>
                    <th>Dirección</th>
                    <th>Correo de la empresa</th>
                </tr>
            </thead>
            <tbody>
                {RegistrarEmpresas.map((RegistrarEmpresas) => (
                    <tr key={RegistrarEmpresas.id}>
                        <td>{RegistrarEmpresas.nombreEmpresa}</td>
                        <td>{RegistrarEmpresas.tipoNegocioE}</td>
                        <td>{RegistrarEmpresas.descripcion}</td>
                        <td>{RegistrarEmpresas.horariosAtencion}</td>
                        <td>{RegistrarEmpresas.diasAtencion}</td>
                        <td>{RegistrarEmpresas.numeroCelular}</td>
                        <td>{RegistrarEmpresas.numeroTelefono}</td>
                        <td>{RegistrarEmpresas.direccion}</td>
                        <td>{RegistrarEmpresas.correoEmpresa}</td>
                        <td>
                            <Link to={`/edit/${RegistrarEmpresas.id}`} className='btn btn-warning'>Editar</Link>
                            <Link to={`/editar/${RegistrarEmpresas.id}`} className='btn btn-warning'>Editar Producto</Link>
                            <button onClick={ ()=>deleteRegistrarEmpresas(RegistrarEmpresas.id) } className='btn btn-danger'>Borrar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowRegistrarEmpresas