import { SET_POKEMONS } from './types'

export const setPokemons = (payload: object) => ({
  type: SET_POKEMONS,
  payload,
})

