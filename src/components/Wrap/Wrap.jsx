import React, { useState } from 'react'
import {MainWrap} from './WrapStyles'
import Buttons from '../Buttons/Buttons'
import Task from '../Task/Task'
import Form from '../Form/Form'
import {ContainerTask} from '../Task/TaskStyles'

const Wrap = () => {

  const [tarea, setTarea] = useState('')  
  const [TaskList, setTaskList] = useState([])
  const [flocalStorage, setflocalStorage] = useState([])

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
    console.log(TaskList)
  }

  const borrarTarea  = (id) => {
    const temp = TaskList.filter(item=>item.id !== id )
    setTaskList(temp)
  }
  const handleChange = (e) => {
    setTarea(e.target.value)
    console.log(tarea)
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
    
  )
}

export default Wrap