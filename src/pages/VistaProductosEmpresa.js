/*/*import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { todosProductos } from '../funciones/funciones'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
/*import './VistaProductoEmpresa.css';
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,} from "reactstrap";

const VistaProductosEmpresa = () => {
    
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        todosProductos(setProductos)
    },[])

    const deleteRegistrarEmpresas = async (id) =>{
        await axios.delete(`http://localhost:3004/Productos/${id}`)
        todosProductos()
    }
    

  return (
    <div>
        <Container className="table-responsive">
            <br />
             <h1>Productos</h1>
                <Link to="/empresa/registrar-empresa/create" className='btn btn-success'>Registrar Producto</Link>
            <br />
            <br />
            <Table >
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre del Producto</th>
                    <th>Descipcion</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
                </thead>

                <tbody>
                {Productos.map((Productos) => (
                    <tr key={Productos.id}>
                    <td>{Productos.id}</td>
                    <td>{Productos.nombreProducto}</td>
                    <td>{Productos.descripcion}</td>
                    <td>{Productos.precio}</td>
                    <td>{Productos.stock}</td>
                    <td>
                        <Button color="primary" >
                        <FontAwesomeIcon icon={faEdit}/>
                        </Button>{" "}
                        <Button onClick={ ()=>deleteRegistrarEmpresas(Productos.id) } className='btn btn-danger'>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}


export default VistaProductosEmpresa;

*/