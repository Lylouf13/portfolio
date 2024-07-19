import React from 'react'
import './navbar.scss'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className='navbar'>
        <img className='navbar__logo' src={'/Portfolio/Assets/Images/Misc/logo.png'} alt="mon logo" />
        <Link to="/Portfolio#top" className={`navbar__link ${location.pathname==="/Portfolio"? "navbar__link-current" : ""}`}>Home</Link>
        <Link to="/Portfolio/web#top" className={`navbar__link ${location.pathname.includes("/web")? "navbar__link-current" : ""}`}>Web</Link>
        <Link to="/Portfolio/games#top" className={`navbar__link ${location.pathname.includes("/games")? "navbar__link-current" : ""}`}>Games</Link>
        <Link to="/Portfolio/pixelArt#top" className={`navbar__link ${location.pathname.includes("/pixelArt")? "navbar__link-current" : ""}`}>Pixel Art</Link>
    </nav>
  )
}
