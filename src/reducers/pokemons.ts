/* eslint-disable no-case-declarations */
import { GET_SEARCH, SET_FAVORITE, SET_POKEMONS } from '../actions/types'

interface Pokemon {
  favorite?: boolean
  id: number
  name: string
}

interface State {
  pokemons: Pokemon[]
  favorite: Pokemon[]
  pokemonSearch: Pokemon[]
}

interface SetPokemonsAction {
  type: typeof SET_POKEMONS
  payload: Pokemon[]
}

interface SetFavoriteAction {
  type: typeof SET_FAVORITE
  payload: number
}

interface GetSearchAction {
  type: typeof GET_SEARCH
  payload: string
}

type Action = SetPokemonsAction | SetFavoriteAction | GetSearchAction

const initialState: State = {
  pokemons: [],
  favorite: [],
  pokemonSearch: []
}

const findPokemon = (pokemonList: Pokemon[], id: number): Pokemon => {
  return pokemonList.find(element => element.id === id) || { id: 0, name: '', favorite: false }
}

const findElement = (elementList: Pokemon[] | undefined, id: number): Pokemon | undefined => {
  return elementList?.find(element => element.id == id)
}

export const pokemonsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_POKEMONS:
      return {...state, pokemons: action.payload}

    case SET_FAVORITE:
      const pokemonToAdd = findPokemon(state.pokemons, action.payload)
      const element = findElement(state.favorite, action.payload)

      if (element === undefined) {
        return { ...state, favorite: [...state.favorite, pokemonToAdd ]}
      } else {
        const filter = state.favorite?.filter(elem => elem.id !== action.payload )
        return { ...state, favorite: [ ...filter ] }
      }

    case GET_SEARCH:
      const filteredPokemons = state.pokemons.filter(pokemon => pokemon.name.includes(action.payload))
      return { ...state, pokemonSearch: filteredPokemons }

    default:
      return state
  }
}