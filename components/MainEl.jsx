import React from 'react';
import MainCardEl from './mainCard';

export default function MainEl({ title, firstname, secondname, thirdname }) {
  return (
    <div className="Main-Block">
      <span className="Main-Block__title">{title}</span>
      <div className="Main-Block__elements">
        <div className="Main-Block__adapt">
          <MainCardEl name={firstname} />
          <MainCardEl name={secondname} />
        </div>
        <div className="Main-Block__adapt">
          <MainCardEl name={thirdname} />
          <button className="Main-Block__button">Перейти ко всем</button>
        </div>
      </div>
    </div>
  );
}
