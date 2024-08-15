import React from 'react';
import Style from './header.module.scss'
import { VscSearch } from "react-icons/vsc";

const UiHeader = () => {
    return (
        <header>
            <div className={Style.logo}>
            <VscSearch /> <span>User<br />Search</span> 
            </div>
        </header>
    );
};

export default UiHeader;