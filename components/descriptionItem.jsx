import React from 'react'

export default function DescriptionItem({ type, description }) {
  return (
    <div className='description'>
      <h5 className='description__title'>{type}</h5>
      <div className='line'></div>
      <p className='description__text'>{description}</p>
    </div>
  )
}
