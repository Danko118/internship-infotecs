import React, { useEffect, useState } from 'react';
import Style from './modal.module.scss'
import UiLoading from '../loading/loading';
import { FetchUser } from '../../fetch';
import { RxCross1 } from "react-icons/rx";

const UiModal = () => {
    const [isOpen,setOpen] = useState(false)
    const [id,setId] = useState(null)
    const [userData,setData] = useState()

    const [name,setName] = useState("")
    const [gender,setGender] = useState("")
    const [birthDate,setBirthDate] = useState("")
    const [age,setAge] = useState("")
    const [userImage,setuserImage] = useState(undefined)
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [height,setHeight] = useState("")
    const [weight,setWeight] = useState("")
    const [bloodGroup,setBloodGroup] = useState("")
    const [university,setUniversity] = useState("")
    const [occupation,setOccupation] = useState("")
    const [role,setRole] = useState("")

    window.addEventListener("openModal",(e) => {
        setOpen(true)
        setId(e.detail)
    })
    window.addEventListener("closeModal",() => {
        setData()
        setName("Не указано")
        setGender("Не указано")
        setBirthDate("Не указано")
        setAge("Не указано")
        setPhone("Не указано")
        setAddress("Не указано")
        setHeight("Не указано")
        setWeight("Не указано")
        setBloodGroup("Не указано")
        setUniversity("Не указано")
        setOccupation("Не указано")
        setRole("Не указано")
        setuserImage(undefined)
        setOpen(false)
    })

    useEffect(() => {
        if (id !== null)
            FetchUser(setData,id)
    },[id])

    useEffect(() => {
        if (userData !== undefined) {
            setName(userData.firstName? [userData.firstName,userData.maidenName,userData.lastName].join(" ") : "Не указано")
            setGender(userData.gender || "Не указано")
            setBirthDate(userData.birthDate.replaceAll("-",".") || "Не указано")
            setAge(userData.age || "Не указано")
            setPhone(userData.phone || "Не указано")
            setAddress(userData.address? [userData.address.city,userData.address.address].join(" ") : "Не указано")
            setHeight(userData.height || "Не указано")
            setWeight(userData.weight || "Не указано")
            setBloodGroup(userData.bloodGroup || "Не указано")
            setUniversity(userData.university || "Не указано")
            setOccupation(userData.company.title || "Не указано")
            setRole(userData.role || "Не указано")
            setuserImage(userData.image)
        }
            
    },[userData])


    return (
        <div 
            className={[Style.wrapper, (isOpen)? Style.active : ''].join(" ")}
            onClick={() => window.dispatchEvent(new Event("closeModal"))}
        >
            <div className={Style.modal} onClick={(e) => e.stopPropagation()}>
                {(userData !== undefined)?
                    <div className={Style.content}>
                        <div className={Style.image}>
                            <img 
                                src={userImage} 
                                alt="Изображение пользователя" 
                            />
                        </div>
                        <div className={Style.info}>
                            <div className={Style.name}>{name}</div>
                            <hr />
                            <ul>
                                <li>Пол: {gender}</li>
                                <li>Дата рождения: {birthDate}, ({age})</li>
                                <li>Номер телефона: {phone}</li>
                                <li>Адресс: <address>{address}</address></li>
                                <li>Высота: {height}</li>
                                <li>Вес: {weight}</li>
                                <li>Группа крови: {bloodGroup}</li>
                                <li>Университет: {university}</li>
                                <li>Должность: {occupation}</li>
                                <li>Уровень доступа: {role}</li>
                            </ul>
                        </div>
                        <div className={Style.cross} onClick={() => window.dispatchEvent(new Event("closeModal"))}><RxCross1 /></div>
                    </div>
                    : <UiLoading />
                }
            </div>
        </div>
    );
};

export default UiModal;