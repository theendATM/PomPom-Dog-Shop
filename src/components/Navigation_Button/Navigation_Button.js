import React from 'react';
import style from './Navigation_Button.module.css';

export const Navigation_Button = (props) => {

    // let isActive = false;
    
    // const toggleActive = (isActive) => {
    //     isActive = !isActive;
    // }

    return (
        <div className={style.navButton}  onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}