import React from "react";
import "./AuthorizationSignUp.css"
import Cross from "./Vector.svg"

function AuthorizationSignUp(){

    return(
        <div className="AuthorizationSignUp">
            
           
            <h3>POMPOM</h3>
            <img className="cross" src={Cross}/>
            
            <p>Регистрация</p>
            <div className="formButtons">
                <input type="text" name="name" required placeholder="Имя"/>
                <input type="email" name="email" required placeholder="E-mail"/>
                <input type="password" name="password" required placeholder="Пароль"/>
                <input className="signUpButton" type="submit" value="Зарегистрироваться" name="enterButton"/>
            </div>
            
            <p className="enterRef">Войти</p>
        </div>
    )
}

export default AuthorizationSignUp