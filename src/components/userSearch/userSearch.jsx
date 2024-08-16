import React, { useEffect, useState } from 'react';
import UiDropdown from '../dropdown/dropdown';
import Style from './userSearch.module.scss'

const UiUserSearch = ({
    onChange,
    alias,
    placeholder
}) => {
    const [querryKey,setKey] = useState()
    
    useEffect(()=> {
        onChange(alias[querryKey])
    },[querryKey])

    return (
        <div className={Style.search}>
            {placeholder} 
            <UiDropdown 
                options={Object.keys(alias)}
                value={querryKey}
                onChange={setKey}
                isNumber={false}
            />
        </div>
    );
};

export default UiUserSearch;