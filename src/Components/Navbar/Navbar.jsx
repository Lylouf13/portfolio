import React from 'react'
import './navbar.scss'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" className='navbar__link'>home</Link>
        <Link to="/web" className='navbar__link'>web</Link>
        <Link to="/games" className='navbar__link'>games</Link>
        <Link to="/pixelArt" className='navbar__link'>pixel art</Link>
    </nav>
  )
}
