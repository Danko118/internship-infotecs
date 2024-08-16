import React from 'react';
import Style from "./switch.module.scss"

const UiSwitch = ({
    checked,
    setChecked
}) => {
    return (
        <label className={Style.switch}>
            <input 
                type="checkbox"  
                checked={checked} 
                onChange={() => setChecked(!checked)}
            />
            <span className={`${Style.slider} ${Style.round}`}></span>
        </label>
    );
};

export default UiSwitch;