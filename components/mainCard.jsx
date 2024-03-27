import React from 'react';
import Image from 'next/image';

export default function MainCardEl({ name, image }) {
  return (
    <div className="Main-card">
      <Image src={image} alt='' className='Main-card__image'/>
      <div className="Main-card__title-block">
        <span className="Main-card__title">{name}</span>
      </div>
    </div>
  );
}
