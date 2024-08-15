import React, { useState } from 'react';
import Style from './dropdown.module.scss'

function UiDropdown({
    options,
    onChange,
    value
    
    }) {

  const handleOptionChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
      <select 
        id="dropdown" 
        value={value} 
        onChange={handleOptionChange} 
        className={Style.dropdown}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
}

export default UiDropdown;
