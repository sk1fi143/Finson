import React from "react";
import Link from "next/link";
import Image from "next/image";

export const ServiceCard = ({ item }) => {
  return (
    <div className="itemService item">
      <div className="cardService card">
      <Image src="" alt="" className="itemServiceImage"/>
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
