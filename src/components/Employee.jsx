import React from 'react'
import PropType from 'prop-types'

export default function Employee({imgURL, name, position}) {
  return (
    <div className='container border border-gray-200 rounded-2xl shadow-md mx-auto p-4 flex space-x-4 hover:scale-105 transition-transform duration-300'>
      <img src={imgURL} alt={name} className='w-12 h-12 rounded-full' />
      <div className='whitespace-nowrap'>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{position}</p>
      </div>
    </div>
  )
}

Employee.propTypes = {
    imgURL: PropType.string.isRequired,
    name: PropType.string.isRequired,
    position: PropType.string.isRequired,
}