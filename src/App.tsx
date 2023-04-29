import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPokemonDetails, getPokemons } from './api'
import { setPokemons } from './actions'

import Searcher from './components/Searcher'
import PokeList, { pokemonsType, setPokemonsType } from './components/PokeList'
import NavBar from './components/NavBar'
import './styles/App.css'


type AppType = {
  pokemons: pokemonsType[],
  setPokemons: setPokemonsType,
}

function App() {
  const pokemons = useSelector((state: AppType) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => { 
      const pokemonsRes = await getPokemons()
      const pokemonsDetails = await Promise.all(pokemonsRes.map((pokemon: pokemonsType) => getPokemonDetails(pokemon)))
      
      dispatch(setPokemons(pokemonsDetails))
    }
    
    fetchPokemons()
  }, [dispatch])

  return (
    <div className="App">
      
      <NavBar />
      
      <Searcher />
      
      <PokeList pokemons={pokemons} />
    </div>
  )
}

export default App
