import React from 'react';
import Style from "./user.module.scss"

const UiUser = ({
    id,
    name,
    age,
    gender,
    phone,
    address
}) => {
    return (
        <tr className={Style.item}>
            <td>{name}</td>
            <td>{age }</td>
            <td>{gender }</td>
            <td>{phone }</td>
            <td>{address}</td>
        </tr>
    );
};

export default UiUser;