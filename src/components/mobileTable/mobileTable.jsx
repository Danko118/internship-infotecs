import React from 'react';
import Style from './mobileTable.module.scss'
import UiMobileUser from '../mobileUser/mobileUser';

const UiMobileTable = ({ data }) => {
    return (
        <div className={Style.table}>
            {data.map((user) => (
                <UiMobileUser
                    key={user.id + "2"}
                    id={user.id}
                    name={[user.firstName,user.maidenName,user.lastName].join(" ")}
                    age={user.age}
                    gender={user.gender}
                    phone={user.phone}
                    address={[user.address.city,user.address.address].join(" ")}
                />
            ))}
        </div>
    );
};

export default UiMobileTable;