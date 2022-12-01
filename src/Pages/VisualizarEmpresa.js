import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './VistaClientesProfileAdmin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import { faEdit, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import imagenUser from '../userImage.jpg';
import * as RiIcons from 'react-icons/ri';

const VisualizarEmpresa = () => {

    const { id } = useParams();
    const [Empresa, setEmpresa] = useState([]);
    
    useEffect(() => {
        axios.get(`https://food-offer-backend-production.up.railway.app/api/registrarEmpresas/${id}`).then((res) => {
          setEmpresa(res.data);
        });
      }, []);

    console.log({Empresa});
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
                    <span className='bg-secondary p-1 px-4 rounded text-white'>Empresa</span>
                    <h5 class="mt-2">{Empresa.nombreEmpresa}</h5>              
                        <div className='card-block'>
                          <h6 className='m-b-20 p-b-5 b-b-default f-w-600'>Información</h6>
                          <div className='row'>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Tipo de Negocio</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.tipoNegocioE}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Descripcion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.descripcion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Horarios de Atencion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.horariosAtencion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Dias de Atencion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.diasAtencion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Numero de Celular</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.numeroCelular}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Numero de Telefono</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.numeroTelefono}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Direccion</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.direccion}</h6>
                              </div>
                              <div className='col-sm-6'>
                                  <p className='m-b-10 f-w-600'>Correo</p>
                                  <h6 className='text-muted f-w-400'>{Empresa.correoEmpresa}</h6>
                              </div>
                          </div>
                        </div>
					<Link id="return" to="/empresas" className='btn btn-success btn-lg mt-2 mb-2 text-white'><RiIcons.RiArrowGoBackFill/></Link>
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
export default VisualizarEmpresa;
