import React from 'react';
import Style from './pageSelector.module.scss';
import UiDropdown from '../dropdown/dropdown';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const UiPageSelector = ({
    options,
    value,
    onChange
}) => {
    return (
        <div className={Style.pageSelector}>
            <button 
                onClick={() => onChange(value - 1)}
                disabled={value === 1}
            >
                <FaArrowLeft />
            </button>
            <UiDropdown 
                options={options}
                value={value}
                onChange={onChange}
                isNumber={true}
            />
            <button 
                onClick={() => onChange(value + 1)}
                disabled={value === options[options.length - 1]}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default UiPageSelector;