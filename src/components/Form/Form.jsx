import React from 'react'
import {  Formulario} from './FormStyles'

const Form = (props) => {
    const {tarea, handleSubmit, handleChange} = props
  return (
    <Formulario onSubmit={handleSubmit}>
        <input type="text"  
        placeholder='Agrege una nueva tarea' 
        onChange={handleChange}
        value={tarea}
        />
        <input type="submit" 
        className='btn' value="Agregar" 
        onClick={handleSubmit}/>  
      </Formulario>
  )
}

export default Form