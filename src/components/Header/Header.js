import React from 'react';
import style from './Header.module.css';
import image from '../../assets/logo.png';
import { Navigation_Button } from '../Navigation_Button';
import { Button } from '../Button';
import burger from '../../mobile/burger.svg';
import { btnStateStorage } from "../../storage/PageState";
import { useSelector, useDispatch } from 'react-redux';

import {useNavigate} from 'react-router-dom'

export const Header = (props) => {

    const navigate = useNavigate()
    const btnStates = btnStateStorage.getState()
    const dispatch = useDispatch();

    const changeNavStyle = (btnType) => {
        btnStateStorage.dispatch({type:btnType})
    }

    return (
        <header className={style.header}>
            <img className={style.logo} src={image} />
            <img className={style.burger} src={burger}/>
            <div className={style.header__buttons}>
                <div className={style.navButtons}>
                    <Navigation_Button text='Главная' onClick={()=>{changeNavStyle("MAIN_PAGE"); navigate("/")}} isActive={btnStates.main}/>
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='Все питомцы' onClick={()=>{changeNavStyle("ALLPETS_PAGE"); navigate("/all")}} isActive={btnStates.allPets}/>
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='О нас' onClick={()=>{changeNavStyle("ABOUT_PAGE"); navigate("/about")}} isActive={btnStates.about}/>
                </div>
                <div className={style.loginButton}>
                    <Button fontSize={16} text='Войти' />
                </div>
            </div>
        </header>
    )
}