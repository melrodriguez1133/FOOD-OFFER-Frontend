import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import {  Table,  Button,  Container} from "reactstrap";
import  './ShowRegistrarEmpresas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt,faEye} from '@fortawesome/free-solid-svg-icons';

const endpoint = 'https://food-offer-backend-production.up.railway.app/api'
//'https://isbackend-production.up.railway.app/api'

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
        var opcion = window.confirm("¿Estás Seguro que deseas Eliminar?");
        if (opcion === true) {
            await axios.delete(`${endpoint}/registrarEmpresas/${id}`)
            getAllRegistrarEmpresas()
            window.location.reload();
        }
    }

  return (
        <div>
            <Container className="table-responsive">
                <br />
                <h1>Empresa</h1>
                <Link to="/empresa/empresa/RegistrarEmpresa" className='btn btn-success'>Registrar Empresa</Link>
                <br />
                <Table >
                    <thead>
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
                        <Link to={`/empresa/empresa/VisualizarEmpresa/${RegistrarEmpresas.id}`} className='btn btn-success'>
                            <FontAwesomeIcon icon={faEye}/>
                        </Link>
                            <Link to={`/empresa/empresa/EditarEmpresa/${RegistrarEmpresas.id}`} className='btn btn-warning'>
                                <FontAwesomeIcon icon={faEdit}/>
                            </Link>
                            <button onClick={ ()=>deleteRegistrarEmpresas(RegistrarEmpresas.id) } className='btn btn-danger'>
                                <FontAwesomeIcon icon={faTrashAlt}/>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
                </Table>
            </Container>
        </div>
  )
}

export default ShowRegistrarEmpresas