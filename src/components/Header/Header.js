import React from 'react';
import style from './Header.module.css';
import image from '../../assets/logo.png';
import { Navigation_Button } from '../Navigation_Button';
import { Button } from '../Button';
import burger from '../../mobile/burger.svg';
import {useNavigate} from 'react-router-dom'
import { storage } from '../../storage/PomPomStorage';


function logIn(){
    storage.dispatch({type:"LOGIN"})
}

export const Header = (props) => {

    const navigate=useNavigate()

    return (

        

        <header className={style.header}>
            <img className={style.logo} src={image} />
            <img className={style.burger} src={burger}/>
            <div className={style.header__buttons}>
                <div className={style.navButtons}>
                    <Navigation_Button text='Главная' onClick={()=>navigate("/")} />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='Все питомцы' onClick={()=>navigate("/all")} />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='О нас' onClick={()=>navigate("/about")} />
                </div>
                <div className={style.loginButton}>
                    <Button fontSize={16} text='Войти' onClick={logIn} />
                </div>
            </div>
        </header>
    )
}