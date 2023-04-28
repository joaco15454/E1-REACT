import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const NavbarHero = styled.header`
     display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  background-color: #141414;
    
    
    `

export const ButtonNavbar= styled.button `
    width: 120px;
    height: 60px;
    border: none;
    background-color: #474747;
    cursor: pointer;
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 18px;
`
export const NavbarLink = styled(NavLink)`
    list-style: none;
    width: 40px;
    height: 20px;
    
    color: white;
`