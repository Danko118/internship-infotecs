import React, { useEffect, useState } from 'react';
import Style from './table.module.scss'
import {FetchData,FetchFilterData} from '../../fetch';
import UiUser from '../user/user';
import UiPageSelector from '../pageSelector/pageSelector';
import UiUserLimit from '../userLimit/userLimit';
import UiFilter from '../filter/filter';
import UiSwitch from '../switch/switch';
import { FaCircleNotch } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const UiTable = () => {
    const [data,setData] = useState()
    const [page,setPage] = useState(1)
    const [key,setKey] = useState("firstName")
    const [pageOptions,setPages] = useState([])
    const [limit,setLimit] = useState(30)
    const [filter,setFilter] = useState(false)
    const [query,setQuery] = useState("")
    const [sort,setSort] = useState(false)
    const [loaded,setLoaded] = useState(false)
    const [error,setError] = useState(false)

    // Запрос на API
    useEffect(() => {
        setData();
        if (filter && query !== "" && key !== "")
            FetchFilterData(setData,limit,page,key,query)
        else
            FetchData(setData,limit, page); 
    }, [limit,page,query,filter])

    // Обнуление таблицы, если была произведена смена лимита
    useEffect(() => {
        setPage(1)
    }, [limit])

    // Расчет кол-ва страниц
    useEffect(() => {
        if (data !== undefined)
            setPages(Array.from({length: Math.ceil(data.total / limit)},(__,i) => i+1))
    }, [data])

    return (
        <div className={Style.table}>
            <div className={Style.title}>
                <h1>Поиск пользователей</h1>
                <div className={Style.switch}>
                    <IoSearchOutline className={(filter)? Style.active : ""}/>
                    <UiSwitch 
                        checked={filter}
                        setChecked={setFilter}
                    />
                </div>
            </div>
            {(filter)? 
                <UiFilter
                    setKey={setKey}
                    setQuery={setQuery}
                    query={query}
                />
                :
                <></>
            }
            <div className={Style.options}>
                {/* небольшой колхоз, но зато на сайте красиво xd */}
                {/* grid на 3col , первый div пустой */}
                <div></div>
                <UiPageSelector
                    options={pageOptions}
                    value={page}
                    onChange={setPage}
                />
                <UiUserLimit 
                    value={limit}
                    onChange={setLimit}
                />
            </div>
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
                        { (data)? data.users.map((user) => (
                            <UiUser 
                                key={user.id}
                                name={[user.firstName,user.maidenName,user.lastName].join(" ")}
                                age={user.age}
                                gender={user.gender}
                                phone={user.phone}
                                address={[user.address.city,user.address.address].join(" ")}
                            />
                        ))
                        : <tr><td></td><td></td><td className={Style.loading}>Загрузка <div className={Style.loadIcon}><FaCircleNotch /></div></td></tr> 
                    }
                </tbody>
            </table>
            <UiPageSelector
                options={pageOptions}
                value={page}
                onChange={setPage}
            />
        </div>
    );
};

export default UiTable;