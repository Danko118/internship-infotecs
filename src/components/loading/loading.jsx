import React, { useState } from 'react';
import Style from './loading.module.scss'
import { FaCircleNotch } from "react-icons/fa6";

const UiLoading = () => {
    const [error,setError] = useState(false)
    const [errorMSG,setMSG] = useState("")

    // Если често тут можно передавать в Event состояние ошибки,мне просто немного лень
    // Может сделаю 
    window.addEventListener("fetch failed",() => {
        setError(true)
        setMSG("При загрузке произошла ошибка, попробуйте перезагрузить страницу или зайти попозже")
    })
    window.addEventListener("user fetch failed",() => {
        setError(true)
        setMSG("При загрузке данных пользователя произошла ошибка, попробуйте ещё раз")
    })

    return (
        <>
        { (!error)?
            <div className={Style.loading}>
                Загрузка <div className={Style.loadIcon}><FaCircleNotch />
                </div>
            </div>
            :
            <div className={Style.error}>
                {errorMSG}
            </div>
        }
        </>
    );
};

export default UiLoading;