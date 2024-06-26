import React from 'react';
import YouCanLike from './youCanLike';
import DescriptionItem from './descriptionItem';
import Form from './form';
import Image from 'next/image';
import Parameters from './parameters';

export default function ItemPagePurch({
  title,
  textDescr,
  price,
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
            <span>{price} бат</span>
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
          <Image src="" alt="" className="gallery__img" />
        </div>
        <DescriptionItem type="Описание" description={textDescr} />
        <Parameters tableType={tableType} data={data} selectedItemSlug={selectedItemSlug} />
        <div className="col2 coladapt">
          <Form date="Дата встречи" />
        </div>
        <YouCanLike />
      </div>
      <div className="col2">
        <div className="rowPrice">
          <span>Цена:</span>
          <span>{price} бат</span>
        </div>
        <Form date="Дата встречи" />
      </div>
    </div>
  );
}
