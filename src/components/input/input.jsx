import React from 'react';
import Style from './input.module.scss'

const UiInput = (
    {   onChange,
        value,
        placeholder
    }) => 
{
    return (
        <input
            onChange={(onChange)&&(e => onChange(e.target.value))}
            value={value}
            placeholder={placeholder}
            type={"text"}
            className={Style.input}
        />
    );
};

export default UiInput;