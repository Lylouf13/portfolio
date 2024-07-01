import React from 'react'

// Testing, replace with container afterwards
import WebProjects from '../Containers/WebProjects/WebProjects'

export default function Web() {
  return (
    <div className='main'>
        <h1 className='main__title'>Web</h1>
        <p>On retrouve ici tous mes projets web !</p>
        <WebProjects/>
    </div>
  )
}
