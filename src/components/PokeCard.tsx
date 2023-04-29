import { Card, Tag, Divider } from 'antd'
import LazyImage from '../hooks/LazyImage'
import LikeButton from './LikeButton'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'
import { useState } from 'react'

const typeColors: {[key: string]: string} = {
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

interface Props {
  name: string;
  image: string;
  types: {type: {name: string}}[];
  id: number;
  favorite?: object
}

function PokeCard({ name, image, types, id }: Props):JSX.Element {
  const dispatch = useDispatch()
  
  const [favoriteLocal, setFavoriteLocal] = useState(false)

  const handleOnFavorite = ()=> {
    dispatch(setFavorite(id))
    setFavoriteLocal(!favoriteLocal)
  }
  
  return (
    <Card 
      title={name} 
      extra={<LikeButton onClick={handleOnFavorite} isFavorite={favoriteLocal} />}
      hoverable
      cover={<LazyImage src={image} alt={name} /> }
    >
      <Divider style={{ marginTop: 0, marginBottom: 16}} />
      
      <div style={{ display: 'flex' }} >
        {
          types.map((types: {type: {name: string}}, index: number) => (
            <Tag color={typeColors[types.type.name]} key={index}>{ types.type.name }</Tag>
          ))
        }
      </div>
    </Card>
  )
}

export default PokeCard