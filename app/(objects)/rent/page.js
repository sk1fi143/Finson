"use client";

import { ItemCard } from "@/components/itemCard";
import data from "@/app/data";
import Filter from "@/components/filter";
import { useState } from "react";
import FilterSvg from '@/public/images/svg/filters';

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
  'Доступность': ['Да', 'Нет'],
  'Срок аренды': ['1 месяц', '3 месяца', '6 месяцев', '1 год'],
  'Спальни': [2, 4, 6],
  'Ванные': [2, 4, 6],
  'Доступность к морю': ['Да', 'Нет'],
  'Проживание с животными': ['Да', 'Нет'],
  'Стоимость': [],
}

export default function RentPage() {
  const [dataRent, setDataRent] = useState(data.rent);
  
  const handleFilterChange = (criteria) => {
    let filteredResult = data.rent.filter((item) => {
      return (
        ((criteria["Тип жилья"].length === 0 && criteria["Тип жилья"].includes(item.type)) || !criteria["Тип жилья"].includes(item.type)) ||
        ((criteria["Район"].length === 0 && criteria["Район"].includes(item.district)) || !criteria["Район"].includes(item.district)) ||
        ((criteria["Спальни"].length === 0 && criteria["Спальни"].includes(item.bedroom) || !criteria["Спальни"].includes(item.bedroom))) ||
        ((criteria["Ванные"].length === 0 && criteria["Ванные"].includes(item.bathroom) || !criteria["Ванные"].includes(item.bathroom))) ||
        ((criteria["Доступность"].length === 0 && criteria["Доступность"].includes(item.availability) || !criteria["Доступность"].includes(item.availability))) ||
        ((criteria["Срок аренды"].length === 0 && criteria["Срок аренды"].includes(item.period) || !criteria["Срок аренды"].includes(item.period))) ||
        ((criteria["Доступность к морю"].length === 0 && criteria["Доступность к морю"].includes(item.sea) || !criteria["Доступность к морю"].includes(item.sea))) ||
        ((criteria["Проживание с животными"].length === 0 && criteria["Проживание с животными"].includes(item.animals) || !criteria["Проживание с животными"].includes(item.animals)))
      );
    });

    if (document.querySelectorAll('input:checked').length === 0){
      filteredResult = data.rent;
    }
  
    setDataRent(filteredResult);
  };

  const handlePrice = (filteredResult) => {
    setDataRent(filteredResult);
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleBlock = () => {
    setIsVisible(!isVisible);
    const overlay = document.querySelector('.overlay');
    if (isVisible) {
      overlay.classList.add('hidden');
      document.body.classList.remove('no-scroll');
      overlay.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    }
  };

  return (
    <>
      <h2 className="title">Все объекты на аренду</h2>
      <div className="pageRow">
        <div className="wrap">
          {dataRent.map((item) => (
            <ItemCard item={item} key={item.slug} />
          ))}
        </div>
        <Filter handleFilterChange={handleFilterChange} filterOptions={filterOptions} data={data.rent} handlePrice={handlePrice} />
      </div>
      <button onClick={toggleBlock} className="filter-adapt">
        <FilterSvg />
        <span className="name-filter">Фильтры</span>
      </button>
      {isVisible && (
        <div className="overlay">
          <div className="block">
            <button onClick={toggleBlock}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 5L4.99998 19M5.00001 5L19 19"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <Filter handleFilterChange={handleFilterChange} filterOptions={filterOptions} />
          </div>
          <div className="filter-adapt">
            <FilterSvg />
            <span className="name-filter">Фильтры</span>
          </div>
        </div>
      )}
    </>
  );
}
