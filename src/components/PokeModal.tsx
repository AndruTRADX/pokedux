import {  Button, Divider, Image, Modal, Space, Tag, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { pokemonsType, statColors, typeColors } from '../types/types'

const { Text } = Typography

interface Props {
  name?: string
  visible?: boolean
  handleOnModal?: () => void
}

interface RootState {
  pokemonOnModal: pokemonsType
}

const PokeModal = ({ name, visible, handleOnModal}: Props):JSX.Element => {
  const currentPokemon = useSelector((state: RootState) => state.pokemonOnModal)

  return (
    <>
      <Modal 
        title={name} 
        open={visible} 
        onCancel={handleOnModal} 
        onOk={handleOnModal}
        footer={
          <Button key="back" onClick={handleOnModal} type="primary" >Return</Button>
        }
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <Image src={currentPokemon.sprites?.front_default} width="70%" />
        </div>
        <Divider />
        
        <Space direction="vertical" size="middle" style={{ display: 'flex', paddingBottom: '0.5rem' }}>
          <Text>Types:</Text>
          <div style={{ display: 'flex' }} >
            {
              currentPokemon.types?.map((types: {type: {name: string}}, index: number) => (
                <Tag color={typeColors[types.type.name]} key={index}>{ types.type.name }</Tag>
              ))
            }
          </div>

          <Text>Abilities:</Text>
          <div style={{ display: 'flex' }} >
            {
              currentPokemon.abilities?.map((abilities: {ability: {name: string}}, index: number) => (
                <Tag key={index}>{ abilities.ability.name }</Tag>
              ))
            }
          </div>

          <Text>Stats:</Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }} >
            {
              currentPokemon.stats?.map((stats: {stat: {name: string}, base_stat: number}, index: number) => (
                <Tag style={{margin: 0}} color={statColors[stats.stat.name]} key={index}>{ `${stats.stat.name}: ${stats.base_stat}` }</Tag>
              ))
            }
          </div>
        </Space>

      </Modal>
    </>
  )
}

export default PokeModal