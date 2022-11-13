import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { todosProductos } from '../Funciones/funciones';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {  Table,  Button,  Container} from "reactstrap";

const VistaProductosEmpresa = () => {
    
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        todosProductos(setProductos)
    },[])

    const deleteRegistrarEmpresas = async (id) =>{
        var opcion = window.confirm("¿Estás Seguro que deseas Eliminar este producto?");
        if (opcion === true) {
            await axios.delete(`https://isbackend-production.up.railway.app/api/Producto/${id}`)
            todosProductos()
            window.location.reload();
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
                        <Link to={`/empresa/productos-empresa/EditarProducto/${Productos.id}`} className='btn btn-success'>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Link>
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