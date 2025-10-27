import React from 'react'
import PropType from 'prop-types'

export default function ProjectCard({imgURL, title, description}) {
  return (
    <div className='container mx-auto p-4 flex flex-col space-y-4 hover:scale-105 transition-transform duration-300'>
        <img src={imgURL} alt={title} />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
  )
}

ProjectCard.propTypes = {
    imgURL: PropType.string.isRequired,
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
}