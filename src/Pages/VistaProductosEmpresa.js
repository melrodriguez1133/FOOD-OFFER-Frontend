import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { todosProductos } from '../Funciones/funciones'
import "bootstrap/dist/css/bootstrap.min.css";
/*import './VistaProductoEmpresa.css';*/
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,} from "reactstrap";



const VistaProductosEmpresa = () => {
    
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        todosProductos(setProductos)
    },[])


  return (
    <div>
        <Container className="table-responsive">
                <br />
                <h1>Productos</h1>
                <Link to="/empresa/productos-empresa/RegistroProducto" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Producto</Link>
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
                    <th>Imagen</th>
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
                    <td><img src={Productos.imagen.default}alt={Productos.nombreProducto}/></td>
                    <td>
                        <Button color="primary" >
                        Editar</Button>{" "}
                        <Button color="danger" >Eliminar</Button>
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