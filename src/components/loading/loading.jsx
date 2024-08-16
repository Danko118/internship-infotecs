import React from 'react';
import Style from './loading.module.scss'
import { FaCircleNotch } from "react-icons/fa6";

const UiLoading = () => {
    return (
        <div className={Style.loading}>
            Загрузка <div className={Style.loadIcon}><FaCircleNotch />
            </div>
        </div>
    );
};

export default UiLoading;