"use client";

import { ItemCard } from "@/components/itemCard";
import data from "@/app/data";
import Filter from "@/components/filter";
import { useState } from "react";


const filterOptions = {
  "Тип жилья": [
    "Вилла",
    "Бунгало",
    "Дом",
    "Аппартамены",
    "Отель",
    "Таунхаус",
  ],
  'Район': [
    "Банг Тао",
    "Камала",
    "Карон",
    "Ката",
    "Катху",
    "Маи Кхао",
    "Най Харн",
    "Панва",
    "Патонг",
    "Пхукет Таун",
    "Равай",
    "Сурин",
    "Таланг",
    "Чалонг",
  ],
  'Спальни': [2, 4, 6],
  'Ванные': [2, 4, 6],
}

export default function RentPage() {
  const [filteredData, setFilteredData] = useState(data.rent);

  const handleFilterChange = (criteria) => {
    let filteredResult = data.rent.filter((item) => {
      return (
        (criteria["Тип жилья"].length === 0 || criteria["Тип жилья"].includes(item.type)) &&
        (criteria["Район"].length === 0 || criteria["Район"].includes(item.district)) &&
        (criteria["Спальни"].length === 0 || criteria["Спальни"].includes(item.bedroom)) &&
        (criteria["Ванные"].length === 0 || criteria["Ванные"].includes(item.bathroom))
      );
    });
  
    setFilteredData(filteredResult);
  };

  return (
    <>
      <h2 className="title">Все объекты на аренду</h2>
      <div className="pageRow">
        <div className="wrap">
          {filteredData.map((item) => (
            <ItemCard item={item} key={item.slug} />
          ))}
        </div>
        <Filter handleFilterChange={handleFilterChange} filterOptions={filterOptions} />
      </div>
    </>
  );
}
