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

function selectPage(index){
    storage.dispatch({type:"OPENPAGE",payload:index})
}

export const Header = (props) => {

    const navigate=useNavigate()

    return (

        

        <header className={style.header}>
            <img className={style.logo} src={image} />
            <img className={style.burger} src={burger}/>
            <div className={style.header__buttons}>
                <div className={style.navButtons}>
                    <Navigation_Button text='Главная' onClick={()=>{navigate("/"); selectPage(0)}} index={0}/>
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='Все питомцы' onClick={()=>{navigate("/all"); selectPage(1)}} index={1} />
                    <div className={style.navButtons_separator} />
                    <Navigation_Button text='О нас' onClick={()=>{navigate("/about"); selectPage(2)}} index={2}/>
                </div>
                <div className={style.loginButton}>
                    <Button fontSize={16} text='Войти' onClick={logIn} />
                </div>
            </div>
        </header>
    )
}