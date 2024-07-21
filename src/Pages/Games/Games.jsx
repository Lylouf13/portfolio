import {React, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import GameProjectSlider from '../../Containers/GameProjectSlider/GameProjectSlider'

export default function Games() {

  const location = useLocation()

useEffect(() => {
    const element = document.getElementById(location.hash)
    if (element) {
      element.scrollIntoView(true);
    } 
})

  return (
    <main>
      <section className='main'>
        <h1 className='main__title'>Games</h1>
        <p className='main__text'>Le point de départ de mon parcours professionnel a été ma formation en game design à l'ICAN,
          durant laquelle j'ai pu m'initier à de nombreux concepts et outils, artistiques comme techniques. Ces projets sont soit des
          projets étudiants, soit des projets personnels ou bien dans le contexte de game jams.
        </p>
      </section>
      <nav>
        <GameProjectSlider/>
      </nav>
      <section id="#project">
        <Outlet />
      </section>
    </main>
  )
}
