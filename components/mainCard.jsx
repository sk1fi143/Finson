import React from 'react';
export default function MainCardEl({ name }) {
  return (
    <div className="Main-card">
      <div className="Main-card__title-block">
        <span className="Main-card__title">{name}</span>
      </div>
    </div>
  );
}
