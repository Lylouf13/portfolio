import React from 'react'
import './navbar.scss'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  console.log(location)
  return (
    <nav className='navbar'>
        <Link to="/Portfolio" className={`navbar__link ${location.pathname==="/Portfolio"? "navbar__link-current" : ""}`}>Home</Link>
        <Link to="/Portfolio/web" className={`navbar__link ${location.pathname.includes("/web")? "navbar__link-current" : ""}`}>Web</Link>
        <Link to="/Portfolio/games" className={`navbar__link ${location.pathname.includes("/games")? "navbar__link-current" : ""}`}>Games</Link>
        <Link to="/Portfolio/pixelArt" className={`navbar__link ${location.pathname.includes("/pixelArt")? "navbar__link-current" : ""}`}>Pixel Art</Link>
    </nav>
  )
}
