import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectSlider from '../../Containers/ProjectSlider/ProjectSlider'

export default function Games() {
  return (
    <section>
      <h1>Games</h1>
      <nav>
        <ProjectSlider/>
      </nav>
      <Outlet />
    </section>
  )
}
