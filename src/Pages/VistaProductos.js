import {useEffect, useState} from 'react';
import './VistaProducto.css';
import axios from 'axios';

import { todosProductos } from '../Funciones/funciones'

function VistaProductos() {
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        todosProductos(setProductos)
    },[])

    console.log({Productos});

    return (
        <div className='container mt-3'>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-xs-1'>
                {Productos.map((Productos) =>  (
                    <div className='producto'>
                        <div className='container pr-1 pl-1 border'>
                        <div className = 'container mt-3'>
                        <h1 className='nombrep'> {Productos.nombreProducto} </h1>
                        <a href = '#'>
                            <div className = 'producto_img'>
                                <img className='imagen' src={Productos.imagen} alt={Productos.nombreProducto}/>
                            </div>
                        </a>
                        <div className = 'producto_footer'>
                            <h1 className='descrip'>{Productos.descripcion}</h1>
                            <p>Fecha Elaboracion: {Productos.fechaElaboracion}</p>
                            <p>Fecha Vencimiento: {Productos.fechaVencimiento}</p>
                            <p>Stock: {Productos.stock}</p>
                            <p>Precio: {Productos.precio} Bs.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

            

export default VistaProductos;