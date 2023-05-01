import React from 'react'
import { NavbarHero,NavbarLink,ButtonNavbar } from './NavbarStyles'
import { useSelector } from 'react-redux'




const Navbar = () => {
  const load = useSelector((state) => state.load.load)
  console.log("El load es:",load)
  return (
   
    <NavbarHero>
     
    {!load ? <ButtonNavbar><NavbarLink to="/todoList">TodoList</NavbarLink></ButtonNavbar> : <ButtonNavbar style={{backgroundColor:'red'}}><NavbarLink to="/todoList">TodoList</NavbarLink></ButtonNavbar>}  
        
        <ButtonNavbar><NavbarLink to="/pokePage">Pokedex</NavbarLink></ButtonNavbar>
    </NavbarHero>
   
  )
}

export default Navbar