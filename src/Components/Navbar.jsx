import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to="/">home</Link>
        <Link to="/games">games</Link>
        <Link to="/pixelArt">pixel art</Link>
    </nav>
  )
}
