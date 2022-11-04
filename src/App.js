import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';

const App = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [fechaVencimiento, cambiarFechaVencimento] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [cantidadDisponible, cambiarCantidadDisponible] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ\s]{25,250}$/, // Letras y espacios, pueden llevar acentos.
		fechaVencimiento:/^\d{1,2}\/\d{1,2}\/\d{2,4}$/,// 7 a 14 numeros.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		cantidadDisponible: /^\d{7,14}$/ // 7 a 14 numeros.
	}


	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			descripcion.valido === 'true' &&
			fechaVencimiento.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' &&
			cantidadDisponible.valido === 'true' 
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});
			cambiarFechaVencimento({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
			cambiarCantidadDisponible({campo: '', valido: null});

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
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripcion*"
					placeholder="inserte una descripcion"
					name="descripcion"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={fechaVencimiento}
					cambiarEstado={cambiarFechaVencimento}
					tipo="date"
					label="Fecha de Vencimiento*"
					name="fechaVencimiento"
					leyendaError="solo debe ingresar una fecha"
					expresionRegular={expresiones.fechaVencimiento}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="date"
					label="Fecha de Elaboracion*"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Precio*"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>
				<Input
					estado={cantidadDisponible}
					cambiarEstado={cambiarCantidadDisponible}
					tipo="text"
					label="Cantidad disponible*"
					placeholder="Ingrese la cantidad disponible"
					name="cantidadDisponible"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.cantidadDisponible}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="date"
					label="Fecha Limite de Oferta*"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
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