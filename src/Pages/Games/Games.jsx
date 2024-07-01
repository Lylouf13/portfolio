import React from 'react'
import { Outlet } from 'react-router-dom'
import GameProjectSlider from '../../Containers/GameProjectSlider/GameProjectSlider'

export default function Games() {
  return (
    <main>
      <section className='main'>
        <h1 className='main__title'>Games</h1>
      </section>
      <nav>
        <GameProjectSlider/>
      </nav>
      <Outlet />
    </main>
  )
}
