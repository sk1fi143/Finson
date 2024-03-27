import React from 'react';
import MainCardEl from './mainCard';
import Link from 'next/link';

export default function MainEl({ title, firstname, secondname, thirdname, link }) {
  return (
    <div className="Main-Block">
      <span className="Main-Block__title">{title}</span>
      <div className="Main-Block__elements">
        <MainCardEl name={firstname} />
        <MainCardEl name={secondname} />
        <MainCardEl name={thirdname} />
      </div>
      <Link href={`${link}`}><button className="Main-Block__button">Перейти ко всем</button></Link>
      <div className="Main-Block__grid">
        <MainCardEl className="Main-Block__firstel" name={firstname} />
        <MainCardEl className="Main-Block__secondtel" name={secondname} />
        <MainCardEl className="Main-Block__thirdel" name={thirdname} />
        <Link href={`${link}`}><button className="Main-Block__button__adapt">Перейти ко всем</button></Link>
      </div>
    </div>
  );
}
