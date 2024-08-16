import React, { useEffect, useState } from 'react';
import Style from './sort.module.scss'
import alias from './alias';
import UiUserSearch from '../userSearch/userSearch';
import UiDropdown from '../dropdown/dropdown';

const UiSort = ({
    setSort,
    sortOptions,
    setSortValue
}) => {
    const [selected,setSelected] = useState()

    useEffect(() => {
        setSortValue(sortOptions[selected])
    },[selected])

    return (
        <div className={Style.sort}>
            <UiUserSearch 
                onChange={setSort}
                alias={alias}
                placeholder={"Сортировать "}
            />
            <UiDropdown 
                options={Object.keys(sortOptions)}
                value={selected}
                onChange={setSelected}
                isNumber={false}
            />
        </div>
    );
};

export default UiSort;