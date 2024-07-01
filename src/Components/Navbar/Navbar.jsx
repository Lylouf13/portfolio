import React from 'react'
import './navbar.scss'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className='navbar'>
        <Link to="/" className={`navbar__link ${location.pathname==="/"? "navbar__link-current" : ""}`}>Home</Link>
        <Link to="/web" className={`navbar__link ${location.pathname==="/web"? "navbar__link-current" : ""}`}>Web</Link>
        <Link to="/games" className={`navbar__link ${location.pathname==="/games"? "navbar__link-current" : ""}`}>Games</Link>
        <Link to="/pixelArt" className={`navbar__link ${location.pathname==="/pixelArt"? "navbar__link-current" : ""}`}>Pixel Art</Link>
    </nav>
  )
}
