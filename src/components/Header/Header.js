import React from 'react';
import style from './Header.module.css';
import image from '../../assets/logo.png';
import { Navigation_Button } from '../Navigation_Button';
import { Button } from '../Button';

export const Header = () => {

    return (
        <header className={style.header}>
            <img className={style.logo} src={image} />
            <div className={style.header__buttons}>
                <div className={style.navButtons}>
                    <Navigation_Button text='Главная' />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='Все питомцы' />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='О нас' />
                </div>
                <div className={style.loginButton}>
                    <Button fontSize={16} text='Войти' />
                </div>
            </div>
        </header>
    )
}