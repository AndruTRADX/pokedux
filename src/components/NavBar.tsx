import {  Menu, MenuProps } from 'antd'
import { useState } from 'react'
import { GithubOutlined, LaptopOutlined } from '@ant-design/icons'
import '../styles/NavBar.css'
import { PokeIcon } from '../assets/PokeIcon'

const items: MenuProps['items'] = [
  {
    label: 'Pokedux',
    key: 'home',
  },
  {
    label: (
      <a href="https://andrutradx.github.io/AndruTRADX/" target="_blank" rel="noopener noreferrer">
        My Portfolio 
      </a>
    ),
    key: 'portfolio',
    icon: <LaptopOutlined />,
  },
  {
    label: (
      <a href="https://github.com/AndruTRADX" target="_blank" rel="noopener noreferrer">
        My GitHub
      </a>
    ),
    key: 'github',
    icon: <GithubOutlined />,
  }, 
]

function NavBar():JSX.Element {
  const [current] = useState('home')


  return (
    <nav className="navbar">
      <div className="logo-container">
        <PokeIcon width={28} height={28} />
        <h3 className="brand-font">Pokedux</h3>
      </div>
      <div className="navbar-menu">
        <Menu selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
    </nav>
  )
}

export default NavBar