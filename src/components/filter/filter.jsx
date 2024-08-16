import React from 'react';
import Style from './filter.module.scss'
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
                onChange={setKey}
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