import PokeCard from './PokeCard'
import '../styles/PokeList.css'
import { Col, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

export type pokemonsType = {
  name: string
  url: string
  id: number
  sprites: { front_default: string}
  types: { type: { name: string } }[]
}

interface RootState {
  pokemonSearch: pokemonsType[]
}

export type setPokemonsType = (payload: object) => {
  type: string;
  payload: object;
}

interface Props {
  favorite?: object
  pokemons: pokemonsType[]
}

function PokeList(props: Props):JSX.Element {
  const { pokemons } = props
  const pokemonSearch = useSelector((state: RootState) => state.pokemonSearch)
  const isSearching = pokemonSearch.length > 0
  
  return (
    <main className="display-pokemons">
      {
        isSearching ? (
          <div className="PokeList">
            {pokemonSearch.map((pokemon: pokemonsType, index: number) => (
              <PokeCard 
                key={index}
                name={pokemon.name} 
                image={pokemon.sprites.front_default}
                types={pokemon.types}
                id={pokemon.id}
                favorite={props.favorite}
              />
            ))}
          </div>
        ) : (
          pokemons !== undefined && pokemons.length !== 0 ? (
            <div className="PokeList">
              {pokemons.map((pokemon, index) => (
                <PokeCard 
                  key={index}
                  name={pokemon.name} 
                  image={pokemon.sprites.front_default}
                  types={pokemon.types}
                  id={pokemon.id}
                  favorite={props.favorite}
                />
              ))}
            </div>
          ) : (
            <Col offset={11} style={{ marginTop: 96 }} >
              <Spin indicator={<LoadingOutlined spin style={{ fontSize: 38 }} />} tip="Loading" />
            </Col>
          )
        )
      }
    </main>
  )
}

export default PokeList