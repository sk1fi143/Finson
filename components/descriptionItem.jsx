import React from 'react'

export default function DescriptionItem({ description }) {
  return (
    <div className='description'>
      <h5 className='description__title'>Описание</h5>
      <div className='line'></div>
      <p className='description__text'>{description}</p>
    </div>
  )
}
