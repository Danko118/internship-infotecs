import React, { useEffect, useState } from 'react';
import Style from './mainComponent.module.scss'
import {FetchData} from '../../fetch';
import UiPageSelector from '../pageSelector/pageSelector';
import UiUserLimit from '../userLimit/userLimit';
import UiFilter from '../filter/filter';
import UiSort from '../sort/sort';
import UiSwitch from '../switch/switch';
import UiTable from '../table/table';
import UiLoading from '../loading/loading';
import UiMobileTable from '../mobileTable/mobileTable';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosFunnel } from "react-icons/io";

const MainComponent = () => {
    const [data,setData] = useState()
    const [page,setPage] = useState(1)
    const [filterKey,setFilterKey] = useState("firstName")
    const [sortKey,setSortKey] = useState("firstName")
    const [orderKey,setOrderKey] = useState("")
    const [pageOptions,setPages] = useState([])
    const [limit,setLimit] = useState(30)
    const [filter,setFilter] = useState(false)
    const [query,setQuery] = useState("")
    const [sort,setSort] = useState(false)
    const [loaded,setLoaded] = useState(false)

    let SortOptions = {
        "Никак" : "",
        "По возрастанию" : "asc",
        "По убыванию" : "desc"
    }

    window.addEventListener("fetched" , () => {
        setLoaded(true)
    })

    //функция очистки данных
    function clearData() {
        setPage(1)
        setQuery("")
        setFilter(false)
        setFilterKey("")
        setSort(false)
        setSortKey("")
        setOrderKey("")
    }

    // Запрос на API
    useEffect(() => {
        setLoaded(false)
        setData()
        FetchData(
            setData,
            limit, 
            page, 
            (filterKey !== "")? filterKey : null, 
            (query !== "")? query : null, 
            (sortKey !== "")? sortKey : null, 
            (orderKey !== "")? orderKey : null
        ); 
    }, [limit,page, query,filter,filterKey, sort,sortKey,orderKey])

    // Обнуление таблицы, если была произведена смена лимита
    useEffect(() => {
        setPage(1)
    }, [limit])

    // Если фильтр был выключен, то следует очистить нужные данные
    useEffect(() => {
        setQuery("")
        setFilterKey("")
    }, [filter])

    // Если сортировка была выключена, то следует очистить нужные данные
    useEffect(() => {
        setSortKey("")
        setOrderKey("")
    }, [sort])

    // Расчет кол-ва страниц
    useEffect(() => {
        if (data !== undefined)
            setPages(Array.from({length: Math.ceil(data.total / limit)},(__,i) => i+1))
    }, [data,limit])

    return (
        <div className={Style.wrapper}>
            <div className={Style.title}>
                <h1 onClick={() => clearData()}>Поиск пользователей</h1>
                <div className={Style.filters}>
                    <div className={Style.switch}>
                        <IoSearchOutline className={(filter)? Style.active : ""}/>
                        <UiSwitch 
                            checked={filter}
                            setChecked={setFilter}
                        />
                    </div>
                    <div className={Style.switch}>
                        <IoIosFunnel className={(sort)? Style.active : ""}/>
                        <UiSwitch 
                            checked={sort}
                            setChecked={setSort}
                        />
                    </div>
                </div>
            </div>
            {(filter)? 
                <UiFilter
                    setKey={setFilterKey}
                    setQuery={setQuery}
                    query={query}
                />
                :
                <></>
            }
            {(sort)? 
                <UiSort
                    setSort={setSortKey}
                    sortOptions={SortOptions}
                    setSortValue={setOrderKey}
                />
                :
                <></>
            }
            <div className={Style.options}>
                {/* небольшой колхоз, но зато на сайте красиво xd */}
                {/* grid на 3col , первый div пустой */}
                <div className={Style.Doe}></div>
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
            {(loaded)?
                <>
                    <UiTable
                        data={data.users}
                    />
                    <UiMobileTable
                        data={data.users}
                    />
                </>
                : <UiLoading />
            }
            <UiPageSelector
                options={pageOptions}
                value={page}
                onChange={setPage}
            />
        </div>
    );
};

export default MainComponent;