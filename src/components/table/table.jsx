import React from 'react';
import UiUser from '../user/user';
import Style from './table.module.scss'

const UiTable = ({ data }) => {
    return (
        <table>
                <thead>
                    <tr>
                        <th>
                            <div className={Style.resizer}></div>
                            ФИО
                        </th>
                        <th>
                            <div className={Style.resizer}></div>
                            Возраст
                        </th>
                        <th>
                            <div className={Style.resizer}></div>
                            Пол
                        </th>
                        <th>
                            <div className={Style.resizer}></div>
                            Номер телефона
                        </th>
                        <th>
                            Адрес
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <UiUser 
                            key={user.id + "1"}
                            id={user.id}
                            name={[user.firstName,user.maidenName,user.lastName].join(" ")}
                            age={user.age}
                            gender={user.gender}
                            phone={user.phone}
                            address={[user.address.city,user.address.address].join(" ")}
                        />
                    ))}
                </tbody>
            </table>
    );
};

export default UiTable;