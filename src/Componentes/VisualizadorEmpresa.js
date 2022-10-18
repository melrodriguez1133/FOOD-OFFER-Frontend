import React, { Component } from "react";
//import * as React from 'react';
//import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';
//<img className="imagen" src="restaurant.JPG"/>

import './VisualizadorEmpresa.css';

class VisualizadorEmpresa extends Component {
    render(){
        return (
            <div className ="container">
                <div className="containerdown">
                    <div className="imagenEmpresa">
                    <img className="imagen" src="restaurant.JPG"/>
                    </div>
                    <div className="botones">
                        <div className="botonesGrupo">
                                <button className="boton_1">Eliminar</button>
                                <button className="boton_2"> Editar </button>
                                <button className="boton_2"> Volver </button>
                        </div>
                    </div>
                </div>
                <div className="containerDatos">
                    <div className="nombreEmpresa">Nombre de la Empresa largo largo</div>
                    <div className="tipoEmpresa">Tipo de Negocio</div>
                    <div className="descripcion">Descripción...........</div>
                    <div className="horarios">Horarios......</div>
                    <div className="contactos">Contactos: xxxxxxxx - xxxxxxxx</div>
                    <div className="correoEmpresa">Correo: xxxxxxxxx@xxxxx.xxx</div>
                    <div className="ubicacionTitulo">Ubicación Empresa</div>
                    <div className="ubicacionMapa"></div>
                </div>
            </div>
        );
    }
}

export default VisualizadorEmpresa;