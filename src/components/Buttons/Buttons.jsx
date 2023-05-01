import React from 'react'
import {FooterWrap} from './ButtonStyles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeState } from '../redux/userSlice'
const Buttons = (props) => {
  const {TaskList,setTaskList} = props

  const dispatch = useDispatch();
  return (
    <FooterWrap>
        <span >¡Tienes {TaskList.length} tareas pendientes!</span>
        <button onClick={() => {
            dispatch(changeState(!TaskList.length))
          setTaskList([])
        }}>Eliminar todo</button>
    </FooterWrap>
  )
}

export default Buttons