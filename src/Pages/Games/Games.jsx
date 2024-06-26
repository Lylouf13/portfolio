import React from 'react'
import { Outlet } from 'react-router-dom'
import GameProjectSlider from '../../Containers/GameProjectSlider/GameProjectSlider'

export default function Games() {
  return (
    <section>
      <h1>Games</h1>
      <nav>
        <GameProjectSlider/>
      </nav>
      <Outlet />
    </section>
  )
}
