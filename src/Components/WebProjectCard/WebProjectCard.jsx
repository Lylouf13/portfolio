import React from 'react'

import './webProjectCard.scss'

export default function WebProjectCard(data) {
  return (
    <div className='webProjectCard'>
        <img className='webProjectCard__image' src="/Assets/Web/test.png" alt="voidling"/>
        <h2 className='webProjectCard__title'>title</h2>
    </div>
  )
}
