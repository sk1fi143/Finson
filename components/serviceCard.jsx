import React from "react";
import Link from "next/link";

export const ServiceCard = ({ item }) => {
  return (
    <div className="itemService item">
      <div className="cardService card">
      <img src="" alt="" />
      <div className="row">
        <h3 className="name">{item.name}</h3>
        <span className="price">{item.price.toLocaleString()} THB</span>
      </div>
      </div>
      <Link href={`/${item.category}/${item.slug}`} className="link">
        <button>Перейти</button>
      </Link>
    </div>
  );
};
