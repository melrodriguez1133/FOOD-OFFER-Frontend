import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { todosProductos } from '../Funciones/funciones'
import "bootstrap/dist/css/bootstrap.min.css";
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,} from "reactstrap";

const VistaProductosEmpresa = () => {
    
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        todosProductos(setProductos)
    },[])

    const deleteRegistrarEmpresas = async (id) =>{
        var opcion = window.confirm("EstÃ¡s Seguro que deseas Eliminar el elemento "+ Productos.id);
        if (opcion == true) {
            await axios.delete(`http://127.0.0.1:8000/api/Producto/${id}`)
            todosProductos()
        }
      };

  return (
    <div>
        <Container className="table-responsive">
            <br />
             <h1>Productos</h1>
                <Link to="/empresa/productos-empresa/RegistroProducto" className='btn btn-success'>Registrar Producto</Link>
            <br />
            <br />
            <Table >
                <thead>
                <tr>
                    <th>Nombre del Producto</th>
                    <th>Descipcion</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
                </thead>

                <tbody>
                {Productos.map((Productos) => (
                    <tr key={Productos.id}>
                    <td>{Productos.nombreProducto}</td>
                    <td>{Productos.descripcion}</td>
                    <td>{Productos.precio}</td>
                    <td>{Productos.stock}</td>
                    <td>
                    <Link to={`/empresa/productos-empresa/EditarProducto/${Productos.id}`} className='btn btn-success'>Editar</Link>
                        <Button onClick={ ()=>deleteRegistrarEmpresas(Productos.id) } className='btn btn-danger'>Borrar</Button>
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