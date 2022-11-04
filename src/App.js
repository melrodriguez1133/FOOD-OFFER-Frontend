import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';

const producto= [    
{
	"id": 1,
	"descripcion": "Comida",
	"created_at": null,
	"updated_at": null
},
{
	"id": 2,
	"descripcion": "Postres",
	"created_at": null,
	"updated_at": null
},
{
	"id": 3,
	"descripcion": "Bebidas",
	"created_at": null,
	"updated_at": null
}
]
console.log(producto);

const App = () => {
    
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [fechaVencimiento, cambiarFechaVencimento] = useState({campo: '', valido: null});
	const [fechaElaboracion, cambiarFechaElaboracion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [cantidadDisponible, cambiarCantidadDisponible] = useState({campo: '', valido: null});
	const [fechaLimite, cambiarFechaLimite] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ0-9\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{25,250}$/, // Letras y espacios, pueden llevar acentos.
		fechaVencimiento: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
		fechaElaboracion: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
		precio: /^[0-9Bs\s]{3,20}$/, // 4 a 12 digitos.
		cantidadDisponible: /^[0-9]{1,3}$/, // 7 a 14 numeros.
		fechaLimite: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
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
                        {producto && producto.map((d, index) => (
                          <option key={d.id} value={d.id}>{d.descriptions}</option>
                        ))}
                </select>
				<select id="tipoProducto" name="producto" >
					
					{this.state.tipoProductos.map(elemento=>(
						<option key={elemento.id} value={elemento.id}>{elemento.tipoProductos}</option>
					)
					)}
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

<label>Imagen*</label>
        
          <div className="img-holder">
            <img src={profileImage} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={imageHandler}
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
}
 
export default App;