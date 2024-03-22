"use client";

import _ from 'lodash';

export default function Filter({ handleFilterChange, filterOptions }) {
  let filterCriteria = _.cloneDeep(filterOptions);

  const handleCheckboxChange = (category, value) => {
    let updatedFilterCriteria = _.cloneDeep(filterCriteria);

    if (filterCriteria[category].includes(value)) {
      updatedFilterCriteria[category] = filterCriteria[category].filter(item => item !== value);
    } else {
      updatedFilterCriteria[category] = [...filterCriteria[category], value];
    }

    handleFilterChange(updatedFilterCriteria);
  };

  return (
    <div className="filter">
      <h3 className="filter__title">Фильтры</h3>
      {Object.keys(filterOptions).map((category) => (
        <>
          <div className="filter__line"></div>
          <div className="filter__col" key={category}>
            <span className="filter__col__span">{category}</span>
            {filterOptions[category].map((option) => (
              <label key={option}>
                <input
                  key={option}
                  type="checkbox"
                  value={option}
                  onChange={() => handleCheckboxChange(category, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
