import React from 'react'
import data from '@/app/data'
import { ItemCard } from './itemCard'

export default function YouCanLike() {
  return (
    <div className='like'>
      <div className='line'></div>
      <h2 className='titleLike'>Вам может понравиться</h2>
      <div className="row">
          {data.rent.map((item) => (
            <ItemCard item={item} key={item.name} />
          )).slice(0, 3)}
        </div>
    </div>
  )
}
