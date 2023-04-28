import React from 'react'
import { NavbarHero,NavbarLink,ButtonNavbar } from './NavbarStyles'

import { useContext, useEffect } from 'react'
import UserContext from '../Wrap/TodoListContext'

const Navbar = () => {
  const taskList = useContext(UserContext) || []
  console.log(taskList);
  return (
   
    <NavbarHero>
     
      {!taskList ? <ButtonNavbar><NavbarLink to="/todoList">TodoList</NavbarLink></ButtonNavbar>: <ButtonNavbar style={{backgroundColor:'red'}}><NavbarLink to="/todoList">TodoList</NavbarLink></ButtonNavbar>}
        
        <ButtonNavbar><NavbarLink to="/pokePage">Pokedex</NavbarLink></ButtonNavbar>
    </NavbarHero>
   
  )
}

export default Navbar