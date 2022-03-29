import React from "react";
import { createPortal } from "react-dom";
import "./AuthorizationSignUp.css"
import Cross from "./Vector.svg"

function AuthorizationSignUp() {

    return (
        <div id="authorize-shade">
            <div className="AuthorizationSignUp">
                <h3>POMPOM</h3>
                <img className="cross" src={Cross} />

                <p>Регистрация</p>
                <div className="formButtons">
                    <input type="text" name="name" required placeholder="Имя" />
                    <input type="email" name="email" required placeholder="E-mail" />
                    <input type="password" name="password" required placeholder="Пароль" />
                    <input className="signUpButton" type="submit" value="Зарегистрироваться" name="enterButton" />
                </div>

                <p className="enterRef">Войти</p>
            </div>
        </div>

    )
}

export default AuthorizationSignUp