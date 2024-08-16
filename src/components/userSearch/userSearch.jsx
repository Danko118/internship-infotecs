import React, { useEffect, useState } from 'react';
import alias from './alias';
import UiDropdown from '../dropdown/dropdown';
import Style from './userSearch.module.scss'

const UiUserSearch = ({
    onChange
}) => {
    const [querryKey,setKey] = useState()
    let findOptions = ["Выберите вариант","Имени","Воторму имени","Фамилии","Возрасту","Полу","Городу","Улице"]
    
    useEffect(()=> {
        onChange(alias[querryKey])
    },[querryKey])

    return (
        <div className={Style.search}>
            Поиск по  
            <UiDropdown 
                options={findOptions}
                value={querryKey}
                onChange={setKey}
                isNumber={false}
            />
        </div>
    );
};

export default UiUserSearch;