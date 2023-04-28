import React, { useState, useContext, useEffect } from 'react'
import {MainWrap} from './WrapStyles'
import Buttons from '../Buttons/Buttons'
import Task from '../Task/Task'
import Form from '../Form/Form'
import {ContainerTask} from '../Task/TaskStyles'
import UserContext from './TodoListContext'


const Wrap = () => {

  const [tarea, setTarea] = useState('')  
  const [TaskList, setTaskList] = useState([])
  const [flocalStorage, setflocalStorage] = useState([])

  /*useEffect(() => {
    // Actualiza el contexto con la nueva lista de tareas cada vez que cambia
    UserContext.TaskList = TaskList
  }, [TaskList])*/


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
    
    setTaskList(temp)
    
    setTarea('')

  }

  const borrarTarea  = (id) => {
    const temp = TaskList.filter(item=>item.id !== id )
    setTaskList(temp)
  }
  const handleChange = (e) => {
    setTarea(e.target.value)
    console.log(tarea)
  }
  const contexto = 90;
  return (
   <UserContext.Provider value={ TaskList }>
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
            TaskList.map(tarea => (
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
    </UserContext.Provider>
  )
}

export default Wrap