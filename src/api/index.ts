import axios from 'axios'
import { pokemonsType } from '../types/types'

const getPokemons = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    return res.data.results
  } catch (err) {
    return new Error(`${err}`)
  }
}

const getPokemonDetails = async (pokemon: pokemonsType) => {
  try {
    const res = await axios.get(pokemon.url? pokemon.url : '')
    return res.data
  } catch (err) {
    throw new Error(`${err}`)
  }
}


export { getPokemons, getPokemonDetails }