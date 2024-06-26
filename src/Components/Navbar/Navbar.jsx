import React from 'react'
import './navbar.scss'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" className='navbar__link'>Home</Link>
        <Link to="/web" className='navbar__link'>Web</Link>
        <Link to="/games" className='navbar__link'>Games</Link>
        <Link to="/pixelArt" className='navbar__link'>Pixel Art</Link>
    </nav>
  )
}
