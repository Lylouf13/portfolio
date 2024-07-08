import {React, useState} from 'react'
import { Outlet } from 'react-router-dom'
import WebProjects from '../Containers/WebProjects/WebProjects'

export default function Web() {
  return (
    <main>
      <section className='main'>
          <h1 className='main__title'>Web</h1>
          <p className="main__text">On retrouve ici tous mes projets web !</p>
      </section>
      <nav>
          <WebProjects/>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}
