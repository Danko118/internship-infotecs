import React, { useState } from 'react';
import UiUser from '../user/user';
import Style from './table.module.scss'

const UiTable = ({ data }) => {
    const [columns, setColumns] = useState([
        { width: 150, name: 'ФИО' },
        { width: 100, name: 'Возраст' },
        { width: 100, name: 'Пол' },
        { width: 150, name: 'Номер телефона' },
        { width: 200, name: 'Адрес' },
    ]);

    const onMouseDown = (index) => (e) => {
        const startX = e.clientX;

        const onMouseMove = (moveEvent) => {
            const newWidth = Math.max((columns[index].width + moveEvent.clientX - startX) / 1.4, 50);
            setColumns((prevColumns) => {
                const newColumns = [...prevColumns];
                newColumns[index].width = newWidth;
                return newColumns;
            });
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    return (
        <table>
                <thead>
                    <tr>
                    {columns.map((col, index) => (
                        <th key={index} style={{ width: col.width }} className={Style.noselect}>
                            <div className={Style.resizer} onMouseDown={onMouseDown(index)}></div>
                            {col.name}
                        </th>
                    ))}
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