import { Card, Button, Space, Tag, Divider } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import LazyImage from '../hooks/LazyImage'

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

function PokeCard({ name, image, types }: any):JSX.Element {
  
  return (
    <Card 
      title={name} 
      extra={<Button shape="circle" icon={<HeartOutlined />} size="middle" />}
      hoverable
      cover={<LazyImage src={image} alt={name} /> }
    >
      <Divider style={{ marginTop: 0, marginBottom: 16}} />
      
      <Space direction="horizontal" size="small" style={{ display: 'flex' }} >
        {
          types.map((types: any, index: number) => (
            <Tag color={typeColors[types.type.name]} key={index}>{ types.type.name }</Tag>
          ))
        }
      </Space>
    </Card>
  )
}

export default PokeCard