import React from 'react'

export default function ProjectSkills(props) {
    console.log(props)
    return (
        <ul className='projectSkills'>
            ProjectSkills
            {props.skills.map(skill => <li id={`${skill}`}>{ skill }</li>) }
        </ul>
    )
}
