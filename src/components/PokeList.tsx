import PokeCard from './PokeCard'
import '../styles/PokeList.css'
import { Col, Spin } from 'antd'

export type pokemonsType = { 
  name: string, 
  url?: string, 
  sprites: { front_default: string}
  types: unknown[]
}

export type setPokemonsType = (payload: object) => {
  type: string;
  payload: object;
}

interface Props {
  pokemons: pokemonsType[] | undefined
}

function PokeList(props: Props):JSX.Element {
  const { pokemons } = props
  
  return (
    <main className="display-pokemons">
    {
      pokemons !== undefined && pokemons.length !== 0
        ? <div className="PokeList"> {
          pokemons.map((pokemon, index) => (
            <PokeCard 
              key={index} 
              name={pokemon.name} 
              image={pokemon.sprites.front_default}
              types={pokemon.types}
              style={{ minWidth: 100, minHeight: 100 }}  
            />
          ))
        }
        </div>

        : <Col offset={12} style={{ marginTop: 48 }} >
            <Spin spinning size="large" />
          </Col>
    }

  </main>
  )
}

export default PokeList