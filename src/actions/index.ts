import { GET_SEARCH, SET_FAVORITE, SET_MODAL, SET_POKEMONS } from './types'

export const setPokemons = (payload: object) => ({
  type: SET_POKEMONS,
  payload,
})

export const setFavorite = (payload: number) => ({
  type: SET_FAVORITE,
  payload,
})

export const getSearch = (payload: string) => ({
  type: GET_SEARCH,
  payload,
})

export const setOnModal = (payload: number) => ({
  type: SET_MODAL,
  payload,
})


