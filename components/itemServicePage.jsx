import React from 'react';
import YouCanLike from './youCanLike';
import DescriptionItem from './descriptionItem';
import Form from './form';
import Image from 'next/image';

export default function ItemPageService({ title, textDescr, price }) {
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
        <DescriptionItem type="Описание" description={textDescr} />
        <div className="col2 coladapt">
          <Form date="Дата оказания услуги" />
        </div>
        <YouCanLike />
      </div>
      <div className="col2">
        <div className="rowPrice">
          <span>Цена:</span>
          <span>{price} бат</span>
        </div>
        <Form date="Дата оказания услуги" />
      </div>
    </div>
  );
}