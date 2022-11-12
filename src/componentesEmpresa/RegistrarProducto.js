import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './componentesEmpresaProductos/Elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import useFetch from './componentesEmpresaProductos/Hooks/UseFetch';
import './RegistrarProducto.css';

import Input from './componentesEmpresaProductos/Componentes/Input';

const RegistrarProducto = () => {

    const [products]=useFetch("http://127.0.0.1:8000/api/Categoria");
	console.log(products);

	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [fechaVencimiento, cambiarFechaVencimento] = useState({campo: '', valido: null});
	const [fechaElaboracion, cambiarFechaElaboracion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [cantidadDisponible, cambiarCantidadDisponible] = useState({campo: '', valido: null});
	const [fechaLimite, cambiarFechaLimite] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /a-zA-ZÃ€-Ã¿0-9\s]/, // Letras y espacios, pueden llevar acentos.
		descripcion: /a-zA-ZÃ€-Ã¿0-9\s]/, // Letras y espacios, pueden llevar acentos.
		fechaVencimiento: /a-zA-ZÃ€-Ã¿0-9\s]/,//dd/mm/aaaa
		fechaElaboracion: /a-zA-ZÃ€-Ã¿0-9\s]/,//dd/mm/aaaa
		precio: /a-zA-ZÃ€-Ã¿0-9\s]/, // 4 a 12 digitos.
		cantidadDisponible: /a-zA-ZÃ€-Ã¿0-9\s]/, // 7 a 14 numeros.
		fechaLimite: /a-zA-ZÃ€-Ã¿0-9\s]/,//dd/mm/aaaa
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

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}
	
	const [profileImage, setProfileImage] = useState(
		"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
	  );
	
	  const imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
		  if (reader.readyState === 2) {
			setProfileImage(reader.result);
		  }
		};
		console.log(e.target.files[0]);
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

				<select>
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
					placeholder="ingrese dd/mm/aaaa o dd-mm-aaaa"
					name="fechaVencimiento"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa dd-mm-aaaa"
					expresionRegular={expresiones.fechaVencimiento}
				/>
				<Input
					estado={fechaElaboracion}
					cambiarEstado={cambiarFechaElaboracion}
					tipo="text"
					label="Fecha de Elaboracion*"
					placeholder="ingrese dd/mm/aaaa o dd-mm-aaaa"
					name="fechaElaboracion"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa o dd-mm-aaaa"
					expresionRegular={expresiones.fechaElaboracion}
				/>
				<Input
					estado={precio}
					cambiarEstado={cambiarPrecio}
					tipo="text"
					label="Precio*"
					placeholder="00.00 Bs"
					name="precio"
					leyendaError="Dato no valido solo debe ingresar el precio y Bs "
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
					placeholder="ingrese dd/mm/aaaa o dd-mm-aaaa"
					name="fechaLimite"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa o dd-mm-aaaa"
					expresionRegular={expresiones.fechaLimite}
				/>

        
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
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>

    );
};
 
export default RegistrarProducto;