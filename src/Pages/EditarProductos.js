import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import './EditRegistrarEmpresa.css';    
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Funciones/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../Hooks/useFetch';
import Input from '../Componentes/Input';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconName } from "react-icons/io5";


const EditProduct = () => {
   
	const [products]=useFetch("http://127.0.0.1:8000/api/registrarEmpresas");
	//console.log(products);
    const endpoint = 'http://localhost:8000/api/Producto/'

	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [id_categoria, cambiarId_categoria] = useState({});
	const [fechaVencimiento, cambiarFechaVencimento] = useState({campo: '', valido: null});
	const [fechaElaboracion, cambiarFechaElaboracion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [stock, cambiarStock] = useState({campo: '', valido: null});
	const [fechaOferta, cambiarFechaOferta] = useState({campo: '', valido: null});
	const [Imag, cambiarImag] = useState({});
	const [formularioValido, cambiarFormularioValido] = useState(null);
    const navigate = useNavigate()
    const {id} = useParams()

    const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ0-9\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s,]{25,250}$/, // Letras y espacios, pueden llevar acentos.
		fechaVencimiento: /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
		fechaElaboracion: /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
		precio: /^[0-9]{1,20}$/, // 4 a 12 digitos.
		stock: /^[0-9]{1,3}$/, // 7 a 14 numeros.
		fechaOferta: /^([0-2][0-9]|3[0-1])(\/|)(0[1-9]|1[0-2])\2(\d{4})$/,//dd/mm/aaaa
	}
    
	const update = async (e) => {
		e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre.campo,
            descripcion: descripcion.campo,
            id_categoria: id_categoria.campo,
            fechaVencimiento:fechaVencimiento.campo,
            fechaElaboracion: fechaElaboracion.campo,
            precio: precio.campo,
            stock: stock.campo,
            fechaOferta: fechaOferta.campo,
        })
       navigate('/empresa/empresa')

        if(
			nombre.valido === 'true' &&
			descripcion.valido === 'true' &&
			fechaVencimiento.valido === 'true' &&
			fechaElaboracion.valido === 'true' &&
			precio.valido === 'true' &&
			stock.valido === 'true' &&
			fechaOferta.valido === 'true'
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});
			cambiarFechaVencimento({campo: '', valido: null});
			cambiarFechaElaboracion({campo: '', valido: null});
			cambiarPrecio({campo: '', valido: null});
			cambiarStock({campo: '', valido: null});
			cambiarFechaOferta({campo: '', valido: null});


			const data = new FormData();

            const inputsT ={
				nombreProducto:nombre.campo,
				id_categoria:Number(id_categoria),
				descripcion:descripcion.campo,
				fechaVencimiento:fechaVencimiento.campo,
				fechaElaboracion:fechaElaboracion.campo,
				precio:Number(precio.campo),
				stock:Number(stock.campo),
				fechaOferta:fechaOferta.campo
				
			}
    console.log(inputsT);
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
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            cambiarNombre((obj)=>({...obj, campo:response.data.nombreProducto}))
            cambiarDescripcion((obj)=>({...obj, campo:response.data.descripcion}))
            cambiarId_categoria((obj)=>({...obj, campo:response.data.id_categoria}))
            cambiarFechaVencimento((obj)=>({...obj, campo:response.data.fechaVencimiento}))
            cambiarFechaElaboracion((obj)=>({...obj, campo:response.data.fechaElaboracion}))
            cambiarPrecio((obj)=>({...obj, campo:response.data.precio}))
            cambiarStock((obj)=>({...obj, campo:response.data.stock}))
            cambiarFechaOferta((obj)=>({...obj, campo:response.data.fechaOferta}))
            cambiarImag((obj)=>({...obj, campo:response.data.Imag}))
        }
        getProductById()
    }, [] )
    console.log(nombre)
	return (
		<main>
			<h1>Editar Producto</h1>
			<Formulario action="" onSubmit={update}>
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
                    estado={stock}
                    cambiarEstado={cambiarStock}
                    tipo="text"
                    label="Cantidad disponible*"
                    placeholder="Ingrese la cantidad disponible"
                    name="stock"
                    leyendaError="Dato no valido solo se admiten numeros y no mas de 3 cifras"
                    expresionRegular={expresiones.stock}
                />
                <Input
                    estado={fechaOferta}
                    cambiarEstado={cambiarFechaOferta}
                    tipo="text"
                    label="Fecha Limite de Oferta*"
                    placeholder="ingrese dd/mm/aaaa "
                    name="fechaOferta"
                    leyendaError="solo es valido un dato tipo fecha dd/mm/aaaa "
                    expresionRegular={expresiones.fechaOferta}
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
                </MensajeError>
                }   
				<ContenedorBotonCentrado>
				<Link to={`/empresa/productos-empresa`} className='btn btn-warning'>Cancelar</Link>
                <Boton type='submit' className='btn btn-primary'>Confirmar</Boton>
                <br></br>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
 }
 
export default EditProduct; 
/*





<Input
					estado={descripcion}
					cambiarEstado={ cambiarDescripcion }
					tipo="text"
					label="Descripcion*"
					placeholder="Inserte una descripcion"
					name="descripcion"
					leyendaError="La descripcion solo puede contener datos alfanumericos y espacios,ademas comas y puntos"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={id_categoria}
					cambiarEstado={cambiarId_categoria}
					tipo="text"
					label="Horarios de Atencion*"
					placeholder="Ingrese en el formato HH:MM-HH:MM"
					name="id_categoria"
					leyendaError="Solo es valido un dato tipo hora HH:MM-HH:MM"
					expresionRegular={expresiones.id_categoria}
				/>
				<Input
					estado={fechaVencimiento}
					cambiarEstado={cambiarFechaVencimento}
					tipo="text"
					label="Dias de Atencion*"
					placeholder="Ingrese los dias de atencion"
					name="fechaVencimiento"
					leyendaError="solo es valido con datos alfabeticos "
					expresionRegular={expresiones.fechaVencimiento}
				/>
				<Input
					estado={fechaElaboracion}
					cambiarEstado={cambiarFechaElaboracion}
					tipo="text"
					label="Numero de Celular*"
					placeholder="00000000"
					name="celular"
					leyendaError="Dato no valido, solo debe ingresar un numero de celular de 8 digitos"
					expresionRegular={expresiones.fechaElaboracion}
				/>
                <Input
					estado={precio}
					cambiarEstado={cambiarPrecio}
					tipo="text"
					label="Numero de Telefono*"
					placeholder="00000000"
					name="telefono"
					leyendaError="Dato no valido, solo debe ingresar el numero de telefono de 8 digitos"
					expresionRegular={expresiones.precio}
				/>
				<Input
					estado={stock}
					cambiarEstado={cambiarStock}
					tipo="text"
					label="Direccion*"
					placeholder="Ingrese la stock de su empresa"
					name="stock"
					leyendaError="Dato no valido, solo se admiten datos alfanumericos"
					expresionRegular={expresiones.stock}
				/>
				<Input
					estado={fechaOferta}
					cambiarEstado={cambiarFechaOferta }
					tipo="text"
					label="Correo Electronico*"
					placeholder="ejemplo@gmail.com"
					name="correo"
					leyendaError="Solo es valido un dato tipo correo: ejemplo@gmail.com "
					expresionRegular={expresiones.fechaOferta}
				/>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> todos los campos son obligatorios ,se debe rellena el formulario correctamente.
					</p>
				</MensajeError>}


<Link to={`/empresa/empresa`} className='btn btn-warning'>Cancelar</Link>
                <Boton type='submit' className='btn btn-primary'>Guardar</Boton> */


/*const endpoint = 'http://localhost:8000/api/producto/'

const EditProduct = () => {
    const [nombreProducto, setnombreProducto] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [precio, setprecio] = useState('')
    const [fechaElaboracion, setfechaElaboracion] = useState('')
    const [fechaVencimiento, setfechaVencimiento] = useState('')
    const [fechaOferta, setfechaOferta] = useState()
    const [stock, setstock] = useState()
    const [imagen, setimagen] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombreProducto: nombreProducto,
            descripcion: descripcion,
            precio: precio,
            fechaElaboracion: fechaElaboracion,
            fechaVencimiento:fechaVencimiento,
            fechaOferta: fechaOferta,
            stock: stock,
            imagen: imagen,
        })
        navigate('/empresa/productos-empresa')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setnombreProducto(response.data.nombreProducto)
            setdescripcion(response.data.descripcion)
            setprecio(response.data.precio)
            setfechaElaboracion(response.data.fechaElaboracion)
            setfechaVencimiento(response.data.fechaVencimiento)
            setfechaOferta(response.data.fechaOferta)
            setstock(response.data.stock)
            setimagen(response.data.imagen)
            }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <body className='body'>
        <div className="bodyDatos">
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre*</label>
                <input 
                    value={nombreProducto}
                    onChange={ (e)=> setnombreProducto(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Categoria de producto*</label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setdescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripción*</label>
                <input 
                    value={precio}
                    onChange={ (e)=> setprecio(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha de Vencimiento*</label>
                <input 
                    value={fechaElaboracion}
                    onChange={ (e)=> setfechaElaboracion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha de elaboración*</label>
                <input 
                    value={fechaVencimiento}
                    onChange={ (e)=> setfechaVencimiento(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Précio*</label>
                <input 
                    value={fechaOferta}
                    onChange={ (e)=> setfechaOferta(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cantida disponible*</label>
                <input 
                    value={stock}
                    onChange={ (e)=> setstock(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Imagen*</label>
                <input 
                    value={imagen}
                    onChange={ (e)=> setimagen(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            
            <Link to={`/empresa/productos-empresa`} className='btn btn-warning'>Cancelar</Link>

            <button type='submit' className='btn btn-primary'>Confirmar</button>
        </form>
    </div>
    </body>
    )
}

export default EditProduct*/