import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Funciones/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import useFetch from '../Hooks/useFetch';
import Input from '../Componentes/Input';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconName } from "react-icons/io5";
//import { IconName } from "react-icons/ri";

const RegistroProducto = () => {
    
	const [products]=useFetch("http://127.0.0.1:8000/api/Categoria");
	//console.log(products);


	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [id_categoria, cambiarId_categoria] = useState({});
	const [fechaVencimiento, cambiarFechaVencimento] = useState({campo: '', valido: null});
	const [fechaElaboracion, cambiarFechaElaboracion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [cantidadDisponible, cambiarCantidadDisponible] = useState({campo: '', valido: null});
	const [fechaLimite, cambiarFechaLimite] = useState({campo: '', valido: null});
	const [Imag, cambiarImag] = useState({});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ0-9\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s,]{25,250}$/, // Letras y espacios, pueden llevar acentos.
		fechaVencimiento: /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
		fechaElaboracion: /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
		precio: /^[0-9]{1,20}$/, // 4 a 12 digitos.
		cantidadDisponible: /^[0-9]{1,3}$/, // 7 a 14 numeros.
		fechaLimite: /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			descripcion.valido === 'true' &&
			fechaVencimiento.valido === 'true' &&
			fechaElaboracion.valido === 'true' &&
			precio.valido === 'true' &&
			cantidadDisponible.valido === 'true' &&
			fechaLimite.valido === 'true'
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});
			cambiarFechaVencimento({campo: '', valido: null});
			cambiarFechaElaboracion({campo: '', valido: null});
			cambiarPrecio({campo: '', valido: null});
			cambiarCantidadDisponible({campo: '', valido: null});
			cambiarFechaLimite({campo: '', valido: null});


			const data = new FormData();

            const inputsT ={
				nombreProducto:nombre.campo,
				id_categoria:Number(id_categoria),
				descripcion:descripcion.campo,
				fechaVencimiento:fechaVencimiento.campo,
				fechaElaboracion:fechaElaboracion.campo,
				precio:Number(precio.campo),
				stock:Number(cantidadDisponible.campo),
				fechaOferta:fechaLimite.campo
				
			}
			data.append('file',Imag.file, Imag.name);
			data.append('product', JSON.stringify(inputsT));

			fetch('http://127.0.0.1:8000/api/Producto', {
				method: "POST",
				body: data
			})
			.then(res => res.json())
			.then(data => console.log(data)); 
		    } else {
			cambiarFormularioValido(false);
					
		}
		
	}
	
	const [profileImage, setProfileImage] = useState(
		"https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344464.jpg"
	  );
	

	  
	  const imageHandler = (e) => {
		cambiarImag({
			file:e.target.files[0],
			name:e.target.files[0].name
		})
		const reader = new FileReader();
		reader.onload = () => {
		  if (reader.readyState === 2) {
			setProfileImage(reader.result);
		  }
		};
		//console.log(Imag);
		reader.readAsDataURL(e.target.files[0]);
	  };

	  

	return (
		<main>
			<h1>Registrar Productos</h1>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre*"
					placeholder="Ingrese el nombre del producto"
					name="usuario"
					leyendaError="El nombre solo puede contener datos alfanumericos y espacios"
					expresionRegular={expresiones.nombre}
				/>

                <label>Categoria de Productos*</label>

				<select id="producto" onChange={(e)=>{
					cambiarId_categoria(e.target.value);
				}}>
					<option value="" disabled selected>Seleccione un tipo de producto...</option>
				{products && products.map((d, index) => (
                          <option key={d.id} value={d.id}>{d.descripcion}</option>
                        ))}
                          </select>
				          

				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripcion*"
					placeholder="inserte una descripcion"
					name="descripcion"
					leyendaError="La descripcion solo puede contener datos alfanumericos y espacios"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={fechaVencimiento}
					cambiarEstado={cambiarFechaVencimento}
					tipo="text"
					label="Fecha de Vencimiento*"
					placeholder="ingrese dd/mm/aaaa"
					name="fechaVencimiento"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa "
					expresionRegular={expresiones.fechaVencimiento}
				/>
				<Input
					estado={fechaElaboracion}
					cambiarEstado={cambiarFechaElaboracion}
					tipo="text"
					label="Fecha de Elaboracion*"
					placeholder="ingrese dd/mm/aaaa "
					name="fechaElaboracion"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa "
					expresionRegular={expresiones.fechaElaboracion}
				/>
				<Input
					estado={precio}
					cambiarEstado={cambiarPrecio}
					tipo="text"
					label="Precio*"
					placeholder="00"
					name="precio"
					leyendaError="Dato no valido solo debe ingresar el precio  "
					expresionRegular={expresiones.precio}
				/>
				<Input
					estado={cantidadDisponible}
					cambiarEstado={cambiarCantidadDisponible}
					tipo="text"
					label="Cantidad disponible*"
					placeholder="Ingrese la cantidad disponible"
					name="cantidadDisponible"
					leyendaError="Dato no valido solo se admiten numeros y no mas de 3 cifras"
					expresionRegular={expresiones.cantidadDisponible}
				/>
				<Input
					estado={fechaLimite}
					cambiarEstado={cambiarFechaLimite}
					tipo="text"
					label="Fecha Limite de Oferta*"
					placeholder="ingrese dd/mm/aaaa "
					name="fechaLimite"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa "
					expresionRegular={expresiones.fechaLimite}
				/>

          <label>Imagen*</label>
        
          <div className="img-holder">
            <img src={profileImage} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={(e)=>imageHandler(e)}
          />
          <div className="label">
            <label id="agregar-imag" className="image-upload" htmlFor="input">
              + Agregue la imagen de su Producto
            </label>
          </div>
        
				<br/>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> todos los campos son obligatorios ,se debe rellena el formulario correctamente.
					</p>
				</MensajeError>}
				
				<ContenedorBotonCentrado>
				<Link to="/empresa/productos-empresa" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Cancelar</Link>
				<Boton type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white' >Registrar</Boton>
				<br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
				<Link id="return" to="/empresa/productos-empresa" className='btn btn-success btn-lg mt-2 mb-2 text-white'><RiIcons.RiArrowGoBackFill/></Link>
			</Formulario>
		</main>
	);
}
 
export default RegistroProducto;