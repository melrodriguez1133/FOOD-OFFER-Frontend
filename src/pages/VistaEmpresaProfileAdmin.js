import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { todosClientes} from '../funciones/FuncionesClienteAdmin';
import "bootstrap/dist/css/bootstrap.min.css";
import './VistaClientesProfileAdmin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import { faEdit, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import imagenUser from './userImage.jpg';

const VistaClientesProfileAdmin = () => {

    const { id } = useParams();

    const [Clientes, setClientes] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3004/Empresas/${id}`).then((res) => {
          setClientes(res.data);
        });
      }, []);



    console.log({Clientes});
  return (
  <div className='body'>
    <div className ='container mt-5'>
    <div className ='row d-flex justify-content-center'>
        <div className='col-md-7'>
            <div className='card p-3 py-4'>
                <div className='text-center'>
                    <img src={imagenUser} className="rounded-circle"/>
                </div>
                <div className='text-center mt-3'>
                    <span className='bg-secondary p-1 px-4 rounded text-white'>Usuario</span>
                    <h5 class="mt-2">{Clientes.nombre} {""} {Clientes.apellido} </h5>
                        <div className='card-block'>
                          <h6 className='m-b-20 p-b-5 b-b-default f-w-600'>Información</h6>
                          <div className='row'>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Edad</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.edad}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Dirección</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.direccion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Celular</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.celular}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Genero</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.genero}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>CI</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.ci}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Expedido</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.expedido}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Email</p>
                                  <h6 className='text-muted f-w-400'>{Clientes.email}</h6>
                              </div>
                          </div>
                        </div>

                     <ul className='social-list'>
                        <li><FontAwesomeIcon icon={faLocationDot}/></li>
                        <li><FontAwesomeIcon icon={faEnvelope}/></li>
                        <li><FontAwesomeIcon icon={faPhone}/></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}


export default VistaClientesProfileAdmin;
