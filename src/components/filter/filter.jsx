import React from 'react';
import Style from './filter.module.scss'
import alias from './alias';
import UiInput from '../input/input';
import UiUserSearch from '../userSearch/userSearch';

const UiFilter = ({
    setKey,
    setQuery,
    query
}) => {
    return (
        <div className={Style.filter}>
            <UiUserSearch 
                alias={alias}
                onChange={setKey}
                placeholder={"Поиск по "}
            />
            <UiInput 
                placeholder={"Введите запрос"}
                value={query}
                onChange={setQuery}
            />
        </div>
    );
};

export default UiFilter;