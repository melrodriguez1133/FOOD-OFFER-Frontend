import {useEffect, useState} from 'react';
import './VistaProductos.css';
import axios from 'axios';

import { todosProductos } from '../funciones/funciones'

function VistaProductos() {
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        todosProductos(setProductos)
    },[])

    console.log({Productos});

    return (
    <div>
        <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
        <div className='container mt-3'>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-xs-1'>
                {Productos.map((Productos) =>  (
                    <div className='producto'>
                        <div className='container pr-1 pl-1 border'>
                        <div className = 'container mt-3'>
                        <h1 className='nombrep'> {Productos.nombreProducto} </h1>
                        <a href = '#'>
                            <div className = 'producto_img'>
                                <img className='imagen' src={Productos.imagen.default} alt={Productos.nombreProducto}/>
                            </div>
                        </a>
                        <div className = 'producto_footer'>
                            <h1 className='descrip'>{Productos.descripcion}</h1>
                            <p>Fecha Elaboracion: {Productos.fechaElaboracion}</p>
                            <p>Fecha Vencimiento: {Productos.fechaVencimiento}</p>
                            <p>Stock: {Productos.stock}</p>
                            <p className='precioa'>Precio: </p>
                            <p className='preciob'> {Productos.precio} Bs.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
     </div>
    );
}

            

export default VistaProductos;