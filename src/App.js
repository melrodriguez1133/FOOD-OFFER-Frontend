import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';

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
		//fechaVencimiento:/^\d{1,2}\/\d{1,2}\/\d{2,4}$/,// 7 a 14 numeros.
		//fechaElaboracion: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,// 7 a 14 numeros.
		precio: /^[0-9Bs\s]{3,20}$/, // 4 a 12 digitos.
		cantidadDisponible: /^[0-9]{1,3}$/, // 7 a 14 numeros.
		//fechaLimite:/^\d{1,2}\/\d{1,2}\/\d{2,4}$/,// 7 a 14 numeros.
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

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre*"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener datos alfanumericos y espacios"
					expresionRegular={expresiones.nombre}
				/>
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
					tipo="date"
					label="Fecha de Vencimiento*"
					name="fechaVencimiento"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa"
					expresionRegular={expresiones.fechaVencimiento}
				/>
				<Input
					estado={fechaElaboracion}
					cambiarEstado={cambiarFechaElaboracion}
					tipo="date"
					label="Fecha de Elaboracion*"
					name="fechaElaboracion"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa"
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
					tipo="date"
					label="Fecha Limite de Oferta*"
					name="fechaLimite"
					leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa"
					expresionRegular={expresiones.fechaLimite}
				/>
				

				
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