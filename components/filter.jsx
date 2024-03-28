"use client";

import { useState, useEffect } from "react";

export default function Filter({ handleFilterChange, filterOptions, data, handlePrice  }) {
  const [filterCriteria, setFilterCriteria] = useState(filterOptions);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({}); // Состояние для хранения выбранных чекбоксов

  const handleCheckboxChange = (category, value) => {
    setFilterCriteria((prevCriteria) => {
      const updatedFilterCriteria = { ...prevCriteria };
      updatedFilterCriteria[category] = updatedFilterCriteria[        category      ].includes(value)
        ? updatedFilterCriteria[category].filter((item) => item !== value)
        : [...updatedFilterCriteria[category], value];

      handleFilterChange(updatedFilterCriteria);
      return updatedFilterCriteria;
    });

    // Сохраняем выбранные чекбоксы при изменении
    setSelectedCheckboxes({ ...selectedCheckboxes, [category]: value });
    localStorage.setItem("selectedCheckboxes", JSON.stringify({
      ...selectedCheckboxes,
      [category]: value
    }));
  };

  const handlePriceChange = (value) => {
    setMaxPrice(value);
    const filteredResult = data.filter((item) => item.price <= value); // Фильтрация по цене
    handlePrice(filteredResult); // Вызов функции обновления данных
  };

  useEffect(() => {
    // Восстанавливаем выбранные чекбоксы из localStorage
    const savedCheckboxes = JSON.parse(localStorage.getItem("selectedCheckboxes")) || {};
    setSelectedCheckboxes(savedCheckboxes);
  }, []);

  return (
    <div className="filter">
      <h3 className="filter__title">Фильтры</h3>
      {Object.keys(filterOptions).map((category) => (
        <div className="key" key={category}>
          <div className="filter__line"></div>
          <div className="filter__col">
            <span className="filter__col__span">{category}</span>
            {filterOptions[category].map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  value={option}
                  onChange={() => handleCheckboxChange(category, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <input
        className="range"
        type="range"
        min={0}
        max={1000000}
        value={maxPrice}
        step={10000}
        onChange={(e) => handlePriceChange(parseInt(e.target.value))}
      />
      <div className="rowPrice">
        <span>0 THB</span>
        <span>{maxPrice.toLocaleString()} THB</span>
      </div>
    </div>
  );
}
