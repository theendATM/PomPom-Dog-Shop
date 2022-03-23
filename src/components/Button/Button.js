import React from 'react';
import style from './Button.module.css';

export const Button = (props) => {

    const buttonFontSize = {
        fontSize: `${props.fontSize}px`
    }

    return (
        <div className={style.button} style={buttonFontSize}>{props.text}</div>
    )
}