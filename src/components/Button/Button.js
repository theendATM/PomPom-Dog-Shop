import React from 'react';
import style from './Button.module.css';

export const Button = (props) => {



    const buttonStyle = {
        fontSize: `${props.fontSize}px`,
        border: props.isBorder ? "1px solid black" : "none"  
    }

    return (
        <a className={style.button} style={buttonStyle} href=''onClick={props.onClick}>{props.text} </a>
    )
}