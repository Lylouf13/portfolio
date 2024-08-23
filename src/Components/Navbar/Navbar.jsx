import React from 'react'
import './navbar.scss'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to="/portfolio/#top">
          <img className='navbar__logo__image' src={'/portfolio/Assets/Images/Misc/logo.png'} alt="mon logo" />
        </Link>
      </div>
        <Link to="/portfolio/#top" className={`navbar__link ${location.pathname==="/portfolio/"? "navbar__link-current" : ""}`}>Home</Link>
        <Link to="/portfolio/web#top" className={`navbar__link ${location.pathname.includes("/web")? "navbar__link-current" : ""}`}>Web</Link>
        <Link to="/portfolio/games#top" className={`navbar__link ${location.pathname.includes("/games")? "navbar__link-current" : ""}`}>Games</Link>
        <Link to="/portfolio/pixelArt#top" className={`navbar__link ${location.pathname.includes("/pixelArt")? "navbar__link-current" : ""}`}>Pixel Art</Link>
    </nav>
  )
}
