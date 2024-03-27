import React from 'react';
import YouCanLike from './youCanLike';
import DescriptionItem from './descriptionItem';
import Form from './form';
import Image from 'next/image';
import Parameters from '@/components/parameters';

export default function ItemPageRent({
  title,
  textDescr,
  price,
  textRent,
  tableType,
  data,
  selectedItemSlug,
}) {
  return (
    <div className="ItemPageComp">
      <div className="col">
        <div className="title-adapt">
          <h1 className="title">{title}</h1>
          <div className="row-price-adapt">
            <span>Цена:</span>
            <span>{price} бат / мес</span>
          </div>
        </div>
        <Image src="" alt="" className="col__image" />
        <div className="gallery">
          <Image src="" alt="" className="gallery__img" />
          <Image src="" alt="" className="gallery__img" />
          <Image src="" alt="" className="gallery__img" />
          <Image src="" alt="" className="gallery__img" />
          <Image src="" alt="" className="gallery__img" />
          <Image src="" alt="" className="gallery__img" />
          <Image src="" alt="" className="gallery__img adapt-first" />
        </div>
        <DescriptionItem type="Описание" description={textDescr} />
        <DescriptionItem type="Условия аренды" description={textRent} />
        <Parameters tableType={tableType} data={data} selectedItemSlug={selectedItemSlug} />
        <div className="col2 coladapt">
          <Form date="Дата заезда" />
        </div>
        <YouCanLike />
      </div>
      <div className="col2">
        <div className="rowPrice">
          <span>Цена за год:</span>
          <span>{price} бат / мес</span>
        </div>
        <span className="dopInfoPrice">Стоимость при оплате за месяц(а) может отличаться</span>
        <Form date="Дата заезда" />
      </div>
    </div>
  );
}
