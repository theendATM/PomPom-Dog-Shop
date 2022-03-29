import React from 'react';
import style from './Header.module.css';
import image from '../../assets/logo.png';
import { Navigation_Button } from '../Navigation_Button';
import { Button } from '../Button';

import {useNavigate} from 'react-router-dom'

export const Header = (props) => {

    const navigate=useNavigate()

    return (

        

        <header className={style.header}>
            <img className={style.logo} src={image} />
            <div className={style.header__buttons}>
                <div className={style.navButtons}>
                    <Navigation_Button text='Главная' onClick={()=>navigate("/")} />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='Все питомцы' onClick={()=>navigate("/all")} />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='О нас' onClick={()=>navigate("/about")} />
                </div>
                <div className={style.loginButton}>
                    <Button fontSize={16} text='Войти' />
                </div>
            </div>
        </header>
    )
}