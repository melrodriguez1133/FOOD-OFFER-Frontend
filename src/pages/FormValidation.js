import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormValidation.css';

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm() 
  const customSubmit = (data) => {
      //console.log(data)
      alert("¡Validación exitosa!")
  }

  const [colorInput, setColorInput] = useState('#fff7f7')
  useEffect( ()=> {
      let words = watch('prueba')
      if(words === 'react'){setColorInput('#614ad3')}
  } )
  
  return (
    <form className='form-responsive'>
        <h2>Agregar Perfil</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Nombre</label>
                <input type="text" {...register('name',{ 
                    required:true,
                    maxLength:5
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 5</small>}
            </div>
            <div className='form-control'>
                <label>Apellido</label>
                <input type="text" {...register('name',{ 
                    required:true,
                    maxLength:5
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 5</small>}
            </div>
            <div className='form-control'>
                <label>Edad</label>
                <input type="number" {...register('age', {
                    required:true,
                    min:10,
                    max:100
                })} />
                {errors.age?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.age?.type === 'min' && <small className='fail'>La edad mínima es de 10 años</small>}
                {errors.age?.type === 'max' && <small className='fail'>La edad máxima es de 100 años</small>}
            </div>
            <div className='form-control'>
                <label>Dirección</label>
                <input type="text" {...register('name',{ 
                    required:true,
                    maxLength:5
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 5</small>}
            </div>
            <div className='form-control'>
                <label>Celular</label>
                <input type="number" {...register('age', {
                    required:true,
                    min:10,
                    max:100
                })} />
                {errors.age?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.age?.type === 'min' && <small className='fail'>La edad mínima es de 10 años</small>}
                {errors.age?.type === 'max' && <small className='fail'>La edad máxima es de 100 años</small>}
            </div>
            <div className='form-control'>
                <label>Genero</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
            <div className='form-control'>
                <label>CI</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
            <div className='form-control'>
                <label>Expedido</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
            <div className='form-control'>
                <label>E-mail</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
            <div className='form-control'>
                <label>Contraseña</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
            <div className='form-control'>
                <label>Confirmar Contraseña</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
             <div className='form-control'>
                 <input {...register('prueba')} style={{ backgroundColor:colorInput }} />
             </div>   
            <button type='submit'>Send</button>
        </form>
    </form>
  )
}

export default FormValidation;