'use client'

import { useRouter } from "next/navigation";
import React from "react";
import data from "../../../data";


export default function ItemPage() {
  const { slug } = useRouter();
  const product = data.rent.find((item) => item.slug === slug);

  if (!product) {
    return <h1>Объект не найден</h1>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
