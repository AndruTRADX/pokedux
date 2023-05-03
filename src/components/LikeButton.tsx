import { Button } from 'antd'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'

interface Props {
  isFavorite?: boolean
  onClick?: any
}

function LikeButton({ isFavorite, onClick }: Props):JSX.Element {
  const icon = isFavorite ? <HeartFilled /> : <HeartOutlined />
  
  return (
    <Button shape="circle" icon={icon} size="middle" onClick={onClick} />
  )
}

export default LikeButton