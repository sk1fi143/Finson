import React from 'react'
import YouCanLike from './youCanLike'
import DescriptionItem from './descriptionItem'
import Form from './form'
import Image from 'next/image'

export default function ItemPageService({ title, textDescr, price }) {
  return (
    <div className='ItemPageComp'>
        <div className='col'>
            <h1 className='title'>{title}</h1>
            <Image src='' alt='' className='col__image'/>
            <DescriptionItem type='Описание' description={textDescr}/>
            <YouCanLike />
        </div>
        <div className='col2'>
            <div className='rowPrice'>
                <span>Цена:</span>
                <span>{price} бат</span>
            </div>
            <Form date='Дата оказания услуги'/>
        </div>
    </div>
  )
}
