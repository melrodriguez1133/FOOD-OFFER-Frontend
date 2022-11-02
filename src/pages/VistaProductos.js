import React from 'react'
import IMG from "./pollo.jpg";
import './VistaProducto.css';

export class VistaProductos extends React.Component  {
    render(){
	return(
	<>
		<h1 className = "title">PRODUCTOS</h1>
		<div className = "productos">
			<div className = "producto">
                <h1 className="nombrep"> Nombre del producto </h1>
                <a href = "#">
                    <div className = "producto_img">
                        <img className ="imagen" src={IMG} alt=""/>
                    </div>
                </a>
                <div className = "producto_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className= "price"> $320 </p>
                </div>
			</div>
            <div className = "producto">
                <h1 className="nombrep"> Nombre del producto </h1>
                <a href = "#">
                    <div className = "producto_img">
                        <img className ="imagen" src={IMG} alt=""/>
                    </div>
                </a>
                <div className = "producto_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className= "price"> $320 </p>
                </div>
			</div>
            <div className = "producto">
                <h1 className="nombrep"> Nombre del producto </h1>
                <a href = "#">
                    <div className = "producto_img">
                        <img className ="imagen" src={IMG} alt=""/>
                    </div>
                </a>
                <div className = "producto_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className= "price"> $320 </p>
                </div>
			</div>
        </div>
	</>
);
}}
export default VistaProductos;