import React from 'react';
import UiDropdown from '../dropdown/dropdown';
import Style from "./userLimit.module.scss"

const UiUserLimit = ({
    value,
    onChange
}) => {
    let options = ["10","20","30","40","50"]
    return (
        <div className={Style.limits}>
            Кол-во пользователей на странице: 
            <UiDropdown
                options={options}
                value={value}
                onChange={onChange}
                isNumber={false}
            />
        </div>
    );
};

export default UiUserLimit;