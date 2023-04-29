import { Input, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import { getSearch } from '../actions'
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons'

function Searcher():JSX.Element {
  const dispatch = useDispatch()

  const handleSearchValue = ({ target: { value } }: { target: { value: string } }) => {
    dispatch(getSearch(value))
  }
  
  return (
    <Input 
      size="large" 
      placeholder="Search your Pokemon..." 
      onChange={handleSearchValue}
      prefix={<SearchOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.45)' }} />}
      suffix={
        <Tooltip title="Automatically search.">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
      style={{ maxWidth: 920}}
    />
      
  )
}

export default Searcher