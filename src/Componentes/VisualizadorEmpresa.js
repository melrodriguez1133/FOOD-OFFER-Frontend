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
                <div>Food Offer</div>
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
                    <div className="nombreEmpresa">
                        Nombre de la empresa
                    </div>
                    <div className="tipoEmpresa"></div>
                    <div className="descripcion"></div>
                    <div className="horarios"></div>
                    <div className="contactos"></div>
                    <div className="correoEmpresa"></div>
                    <div className="ubicacionTitulo"></div>
                    <div className="ubicacionMapa"></div>
                </div>
            </div>
        );
    }
}

export default VisualizadorEmpresa;