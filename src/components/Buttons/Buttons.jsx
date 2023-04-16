import React from 'react'
import {FooterWrap} from './ButtonStyles'
const Buttons = (props) => {
  const {TaskList,setTaskList} = props
  return (
    <FooterWrap>
        <span>¡Tienes {TaskList.length} tareas pendientes!</span>
        <button onClick={() => {
          setTaskList([])
        }}>Eliminar todo</button>
    </FooterWrap>
  )
}

export default Buttons