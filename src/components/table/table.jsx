import React, { useEffect, useRef, useState } from 'react';
import Style from './table.module.scss'
import FetchData from '../../fetch';
import UiUser from '../user/user';
import UiDropdown from '../dropdown/dropdown';
import UiPageSelector from '../pageSelector/pageSelector';
import { FaCircleNotch } from "react-icons/fa6";

const UiTable = () => {
    const [data,setData] = useState()
    const [page,setPage] = useState(1)
    const [pageOptions,setPages] = useState([])
    const [limit,setLimit] = useState(30)
    const [loaded,setLoaded] = useState(false)
    const [error,setError] = useState(false)

    let limitOptions = ["10","20","30","40","50"]

    const tableRef = useRef(null);

    useEffect(() => {
        if (tableRef.current) {
            tableRef.current.addEventListener('mouseenter', handleMouseEnter);
            tableRef.current.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
        if (tableRef.current) {
            tableRef.current.removeEventListener('mouseenter', handleMouseEnter);
            tableRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
        };
    }, []);

    function handleMouseEnter(event) {
        if (event.target.tagName === 'th' || event.target.tagName === 'TD') {
        event.target.classList.add('border-hover');
        }
    }

    function handleMouseLeave(event) {
        if (event.target.tagName === 'th' || event.target.tagName === 'TD') {
        event.target.classList.remove('border-hover');
        }
    }

    useEffect(() => {
        setData();
        FetchData(setData,limit, page); 
    }, [limit,page])

    useEffect(() => {
        setPage(1)
    }, [limit])

    useEffect(() => {
        if (data !== undefined)
            setPages(Array.from({length: Math.ceil(data.total / limit)},(__,i) => i+1))
    }, [data])

    return (
        <div className={Style.table}>
            <div className={Style.title}>
                <h1>Поиск пользователей</h1>
                <div className={Style.limits}>
                    Кол-во пользователей на странице: 
                    <UiDropdown
                        options={limitOptions}
                        value={limit}
                        onChange={setLimit}
                    />
                </div>
            </div>
            
            <UiPageSelector
                pageOptions={pageOptions}
                page={page}
                setPage={setPage}
            />
            <table ref={tableRef}>
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
                pageOptions={pageOptions}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default UiTable;