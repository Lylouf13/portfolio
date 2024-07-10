import {React, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import WebProjects from '../../Containers/WebProjects/WebProjects'


export default function Web() {

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
          <h1 className='main__title'>Web</h1>
          <p className="main__text">On retrouve ici tous mes projets web, réalisés lors de ma formation OpenClassroom.
          </p>
          <p className="main__text">
            Chacune des pages revient sur les points principaux des différents projets, et sur les compétences développées au cours de ceux-ci.
          </p>
          <p className="main__text">
            Bien que j'essaie de montrer le plus de fonctionnalités possibles, l'idée est de garder une dimension digeste et visuelle pour ces présentations de projets, et
            de mettre à disposition le lien GitHub pour les éléments techniques spécifiques
          </p>
      </section>
      <nav>
          <WebProjects/>
      </nav>
      <section id='project'>
        <Outlet />
      </section>
    </main>
  )
}
