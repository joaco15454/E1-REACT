import React, { useState, useContext, useEffect } from 'react'
import {MainWrap} from './WrapStyles'
import Buttons from '../Buttons/Buttons'
import Task from '../Task/Task'
import Form from '../Form/Form'
import {ContainerTask} from '../Task/TaskStyles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeState } from '../redux/userSlice'
const Wrap = () => {

  const [tarea, setTarea] = useState('')  
  const [TaskList, setTaskList] = useState([]) //TAREA GENERALES
  const [tasks, setTasks] = useState([]); //GUARDADO EN EL LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
  }, [tasks]);

    /** REDUX*/
    const dispatch = useDispatch();
  /* 
**

   */

  const handleSubmit = (e) => {
    e.preventDefault()
    if (tarea === '') {
      alert("Ingrese una tarea")
      return
    }
    const newTask = {
      id: Date.now(),
      tarea:tarea,
      completado: false
    }
    
    



    const temp = [newTask, ...TaskList]
    setTasks(temp)
    setTaskList(temp)
    
    setTarea('')
    dispatch(changeState(tasks.length>0 ? true: false)) 
    
  }

  const borrarTarea  = (id) => {
    const temp = TaskList.filter(item=>item.id !== id )
    setTaskList(temp)
    setTasks(temp)
    dispatch(changeState(tasks.length>0 ? true: false))
  }
  const handleChange = (e) => {
    setTarea(e.target.value)
    
   
    
  }
  return (

    <MainWrap>
      
      <div>
      <h1>TodoList</h1>
      <Form
      tarea={tarea}
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      
      />
        
      </div>
        

        <ContainerTask>
          {
            tasks.map(tarea => (
              <Task 
              key={tarea.id}
              id= {tarea.id}
              tarea={tarea}
              borrarTarea={borrarTarea}
              />
            ))
          }
        </ContainerTask>
        <Buttons
        TaskList= {TaskList}
        setTaskList= {setTaskList}
        />
    </MainWrap>

  )
}

export default Wrap