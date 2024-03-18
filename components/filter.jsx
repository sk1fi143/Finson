'use client'

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const type = ['Вилла', 'Бунгало', 'Дом'];
const bedroom = [2, 4, 6];
const bathroom = [2, 4, 6];

const filterOptions = [
  {
    id: 'type',
    title: 'Тип жилья',
    options: type,
    type: 'radio',
  },
  {
    id: 'bedroom',
    title: 'Спальни',
    options: bedroom,
    type: 'radio',
  },
  {
    id: 'bathroom',
    title: 'Ванные',
    options: bathroom,
    type: 'radio',
  }
]

function checkValidQuery(queries) {
  return queries.filter((query) => query !== '').length > 0;
}

export function convertStringToQueriesObject(searchParams) {
  let selectedQueries = {};
  searchParams.forEach((values, key) => {
    const queries = values.split(',');
    if (selectedQueries[key]) {
      selectedQueries[key].push(...queries);
    } else {
      selectedQueries[key] = queries;
    }
  });
  return selectedQueries;
}

function convertValidStringQueries(queries){
  let q = '';
  for (let [key, value] of Object.entries(queries)) {
    q = q + `${q === '' ? '' : '&'}${key}=${value}`;
  }
  return q;
}

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);
  function handleSelectFilterOptions(e) {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    let selectedQueries = selectedFilterQueries;

    if(selectedQueries[name]){
      if (type === 'radio') {
        selectedQueries[name] = [value];
      } else if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter((query) => query !== value);
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else if (selectedQueries) {
      selectedQueries[name] = [value];
    }
    router.push(`/?${convertValidStringQueries(selectedQueries)}`, {scroll: false,});
  }
  function isChecked(id, option) {
    return (
      Boolean(selectedFilterQueries[id]) && selectedFilterQueries[id].includes(option.toLowerCase())
    );
  }

  return (
    <div className="filter">
      {filterOptions.map(({ id, title, type, options }) => {
        return (
          <div className="filter__row" key={id}>
             <span className="filter__row__span">{title}</span>
             {options.map((value) => {
              return (
                <RadioGroup key={value}>
                  <RadioItem
                    type = {type}
                    name = {id}
                    id = {value}
                    label = {value}
                    value = {value}
                    checked = {isChecked(id, value)}
                    onChange = {handleSelectFilterOptions}
                  />
                </RadioGroup>
              )
             })}
             <div className="filter__line"></div>
          </div>
        )
      })}
      {/* <div className="filter__row">
        <span className="filter__row__span">Тип жилья</span>
        <svg width="12.000000" height="8.000000" viewBox="0 0 12 8" fill="none">
          <path
            id="Path"
            d="M5.74 7.21C5.42 7.21 5.12 7.07 4.91 6.84L0.2 1.48C-0.11 1.11 -0.07 0.56 0.3 0.25C0.66 -0.07 1.21 -0.04 1.53 0.31L5.65 4.99C5.67 5.02 5.71 5.03 5.74 5.03C5.78 5.03 5.81 5.02 5.83 4.99L9.95 0.31C10.16 0.07 10.48 -0.05 10.8 0.01C11.11 0.07 11.37 0.3 11.47 0.6C11.57 0.91 11.5 1.25 11.28 1.48L6.57 6.83C6.36 7.07 6.06 7.21 5.74 7.21Z"
            fill="#000000"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </div> */}
      {/* <div className="filter__line"></div> */}
    </div>
  );
}

function RadioGroup({ children }) {
  return <div>{children}</div>
}
function RadioItem({ id, label, props }) {
  return(
    <>
      <input id={id} {...props} type='checkbox'/>
      <label htmlFor={id}>
        {label}
      </label>
    </>
  )
}