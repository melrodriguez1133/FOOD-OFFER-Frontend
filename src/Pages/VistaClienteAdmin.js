import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import { todosClientes} from '../Funciones/FuncionesClienteAdmin'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt , faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
/*import './VistaProductoEmpresa.css';*/
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,} from "reactstrap";

const VistaClientesAdmin = () => {

    const [shown, setShown] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

    const styleRow = {
        "overflow": "hidden",
        "width": "70px"
    }
    
    
    const [Clientes, setClientes] = useState([]);

    useEffect(() => {
        todosClientes(setClientes)
    },[])

    const deleteRegistrarClientes = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/Usuario/${id}`)
        todosClientes()
    }
    

  return (
    <div>
        <Container className="table-responsive">
            <br />
             <h1>Clientes</h1>
            <br />
            <br />
            <Table >
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Direccion</th>
                    <th>Celular</th>
                    <th>Genero</th>
                    <th>CI</th>
                    <th>Expedido</th>
                    <th>E-mail</th>
                    <th>Contraseña</th>
                </tr>
                </thead>

                <tbody>
                {Clientes.map((Clientes) => (
                    <tr key={Clientes.id}>
                    <td>{Clientes.nombre}</td>
                    <td>{Clientes.apellido}</td>
                    <td>{Clientes.edad}</td>
                    <td style={styleRow}>{Clientes.direccion}</td>
                    <td>{Clientes.celular}</td>
                    <td>{Clientes.genero}</td>
                    <td>{Clientes.ci}</td>
                    <td>{Clientes.expedido}</td>
                    <td style={styleRow}>{Clientes.email}</td>
                    <td>{Clientes.contraseña}
                    </td>
                    <td>
                    <Link to={`/cliente/cliente/VisualizarCliente/${Clientes.id}`} className='btn btn-success'>
                            <FontAwesomeIcon icon={faEye}/>
                        </Link>
                            <Link to={`/cliente/cliente/EditarCliente/${Clientes.id}`} className='btn btn-warning'>
                                <FontAwesomeIcon icon={faEdit}/>
                            </Link>
                            <button onClick={ ()=>deleteRegistrarClientes(Clientes.id) } className='btn btn-danger'>
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


export default VistaClientesAdmin;