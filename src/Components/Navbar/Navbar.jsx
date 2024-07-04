import React from 'react'
import './navbar.scss'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className='navbar'>
        <Link to="/portfolio" className={`navbar__link ${location.pathname==="/portfolio"? "navbar__link-current" : ""}`}>Home</Link>
        <Link to="/portfolio/web" className={`navbar__link ${location.pathname.includes("/web")? "navbar__link-current" : ""}`}>Web</Link>
        <Link to="/portfolio/games" className={`navbar__link ${location.pathname.includes("/games")? "navbar__link-current" : ""}`}>Games</Link>
        <Link to="/portfolio/pixelArt" className={`navbar__link ${location.pathname==="/portfolio/pixelArt"? "navbar__link-current" : ""}`}>Pixel Art</Link>
    </nav>
  )
}
