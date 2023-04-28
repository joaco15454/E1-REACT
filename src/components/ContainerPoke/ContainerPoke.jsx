import React, { useEffect, useState } from 'react'
import { Container, PokeCont, Search,CardPoke } from './ContainerPokeStyles'

const ContainerPoke = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const [datos, setDatos] = useState()
    const [nombrePokemon, setNombrePokemon] = useState(null);

    
    

  const [texto, setTexto] = useState(''
  )
  const handleInputChange = ({target}) => {
    setTexto(target.value)

  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    
   
      const response = await fetch(url + texto)
      const data = await response.json()
      setDatos(data)
      
      
      const pokemon = {
        nombre: data.name,
        tipo: data.types[0].type.name,
        peso: data.weight,
        imagen: data.sprites.front_default
      };
      setNombrePokemon(pokemon)
      console.log(nombrePokemon)
    
  }
  return (
    <>
    <Container>
    <PokeCont onSubmit={handleSubmit}>
        <Search>
        <label htmlFor="poke">Ingrese un numero</label>
        <input id='poke' type="number" value={texto} onChange={handleInputChange} />
        
        </Search>
        <input className='btn_search' type="submit" placeholder='Buscar'/>
       
    </PokeCont>
    {nombrePokemon && (
        <CardPoke>
          <img src={nombrePokemon.imagen} alt={nombrePokemon.nombre} />
          <h1> {nombrePokemon.nombre.toUpperCase()}</h1>
          <span> {nombrePokemon.tipo}</span>
          <p>{nombrePokemon.peso}kg</p>
          
        </CardPoke>
      )}
    </Container>
    </>
  )
}

export default ContainerPoke