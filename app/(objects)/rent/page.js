'use client'

import { ItemCard } from "@/components/itemCard";
import data from "@/app/data";
import Filter, { convertStringToQueriesObject } from "@/components/filter";
import { useSearchParams } from "next/navigation";

// export const metadata = {
//   title: "Аренда",
// };

function isAvailable(arr1, arr2) {
  if (!arr1 || !arr2) {
    return true;
  }
  return arr1.some((item) => arr2?.includes(item));
}

export default function RentPage() {
  const searchParams = useSearchParams();
  const paramsObj = convertStringToQueriesObject(searchParams);
  let filteredProducts = data.rent.filter((product) => {
    const hasType = isAvailable(product.type, paramsObj?.type);
    const hasBedroom = isAvailable(product.bedroom, paramsObj?.bedroom);
    const hasBathroom = isAvailable(product.bathroom, paramsObj?.bathroom);
    return hasType && hasBedroom && hasBathroom;
  });
  if (Object.keys(paramsObj).length === 0) {
    filteredProducts = data.rent;
  }
  if (filteredProducts === 0) {
    return <h1>Объекты не найдены</h1>
  }
  console.log(filteredProducts)
  return (
    <>
      <h2 className="title">Все объекты на аренду</h2>
        <Filter />
        <div className="wrap">
          {filteredProducts.map((item) => (
            <ItemCard item={item} key={item.slug} />
          ))}
        </div>
    </>
  );
}
