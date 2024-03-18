import React from 'react'
import YouCanLike from './youCanLike'
import DescriptionItem from './descriptionItem'
import Form from './form'
import Image from 'next/image'

export default function ItemPageRent({ title, textDescr, price, textRent }) {
  return (
    <div className='ItemPageComp'>
        <div className='col'>
            <h1 className='title'>{title}</h1>
            <Image src='' alt='' className='col__image'/>
            <div className='gallery'>
                <Image src='' alt='' className='gallery__img'/>
                <Image src='' alt='' className='gallery__img'/>
                <Image src='' alt='' className='gallery__img'/>
                <Image src='' alt='' className='gallery__img'/>
                <Image src='' alt='' className='gallery__img'/>
                <Image src='' alt='' className='gallery__img'/>
                <Image src='' alt='' className='gallery__img'/>
            </div>
            <DescriptionItem type='Описание' description={textDescr}/>
            <DescriptionItem type='Условия аренды' description={textRent}/>
            <YouCanLike />
        </div>
        <div className='col2'>
            <div className='rowPrice'>
                <span>Цена за год:</span>
                <span>{price} бат / мес</span>
            </div>
            <span className='dopInfoPrice'>Стоимость при оплате за месяц(а) может отличаться</span>
            <Form date='Дата заезда'/>
        </div>
    </div>
  )
}
