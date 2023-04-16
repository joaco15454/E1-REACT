import React, { useState } from 'react'
import {Tasks} from './TaskStyles'
import {AiFillCloseCircle} from 'react-icons/ai'
const Task = (props) => {
    const {tarea,borrarTarea} = props

    
  return (
    <>
        <div className='containerTask' id={tarea.id}> 
            <Tasks> {tarea.tarea} </Tasks>

           <AiFillCloseCircle style={{fontSize: '30px', cursor:'pointer',height:'40px',backgroundColor : '#6441a5', borderRadius:'14px', marginLeft:'-30px'}}  onClick={() => borrarTarea(tarea.id)}/>
                
        </div>
    </>
  )
}

export default Task