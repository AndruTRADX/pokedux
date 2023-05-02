import { Card, Tag, Divider } from 'antd'
import LazyImage from '../hooks/LazyImage'
import LikeButton from './LikeButton'
import { useDispatch } from 'react-redux'
import { setFavorite, setOnModal } from '../actions'
import { useState } from 'react'
import PokeModal from './PokeModal'
import { typeColors } from '../types/types'


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
  const [visible, setVisible] = useState(false)

  const handleOnFavorite = ()=> {
    dispatch(setFavorite(id))
    setFavoriteLocal(!favoriteLocal)
  }

  const handleOnModal = ()=> {
    dispatch(setOnModal(id))
    setVisible(!visible)
  }
  
  return (
    <>
      <Card 
        title={name} 
        extra={<LikeButton onClick={handleOnFavorite} isFavorite={favoriteLocal} />}
        hoverable
        cover={<LazyImage src={image} alt={name} />}
        onClick={handleOnModal}
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

      <PokeModal handleOnModal={handleOnModal} visible={visible} name={name} />
    </>
  )
}

export default PokeCard