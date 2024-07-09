import React from 'react'

import './projectSkills.scss'

export default function ProjectSkills(props) {
    return (
        <ul className='projectSkills'>
            <h2 className='projectSkills__title'>{props.title}</h2>
            {props.skills.map(skill => <li className='projectSkills__element' key={`${skill}`}>{ skill }</li>) }
        </ul>
    )
}
