import { Input } from 'antd'

function Searcher():JSX.Element {
  
  return (
    <Input.Search size="large" placeholder="Busca tu pokemón..." style={{ maxWidth: 920}} />
  )
}

export default Searcher