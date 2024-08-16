import React, { useState } from 'react';
import Style from './mobileUser.module.scss'
import { IoTriangle,IoSearch  } from "react-icons/io5";

const UiMobileUser = ({
    id,
    name,
    age,
    gender,
    phone,
    address
}) => {
    const [isOpen,setOpen] = useState(false)
    return (
        <div className={[Style.user,(isOpen)? Style.active : ""].join(" ")}>
            <div className={Style.mainInfo} onClick={() => setOpen(!isOpen)}>
                <div className={Style.name}>{name}</div>
                <IoTriangle/>
            </div>
            <div className={Style.addInfo}>
                <ul className={Style.info}>
                    <li>Возраст: {age}</li>
                    <li>Пол: {gender}</li>
                    <li>Номер телефона: {phone}</li>
                    <li>Адрес: <address>{address}</address></li>
                </ul>
                <button className={Style.more}><IoSearch/></button>
            </div>
        </div>
    );
};

export default UiMobileUser;