export const typeColors: {[key: string]: string} = {
  bug: 'lime',
  dragon: 'purple',
  electric: 'gold',
  fighting: 'red',
  fire: 'volcano',
  flying: 'cyan',
  ghost: 'geekblue',
  grass: 'green',
  ground: 'orange',
  ice: 'cyan',
  normal: 'magenta',
  poison: 'purple',
  psychic: 'pink',
  rock: '',
  water: 'blue',
  fairy: 'pink'
}

export const statColors: {[key: string]: string} = {
  hp: 'red',
  attack: 'orange',
  defense: 'blue',
  'special-attack': 'purple',
  'special-defense': 'pink',
  speed: 'cyan'
}

export type pokemonsType = {
  name: string
  url: string
  id: number
  sprites: { front_default: string}
  types: { type: { name: string } }[]
  abilities: { ability: { name: string } }[]
  stats: { 
    stat: { name: string },
    base_stat: number 
  }[]
}