import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./AuthorizationLogIn.css"
import AuthorizationSignUp from "./AuthorizationSignUp.js"
import Cross from "./Vector.svg"


function AuthorizationLogIn(props) {
    //return null;

    if (props.visible && document.getElementById("portal") != null)
        return createPortal(
            <div id="authorize-shade">
                <div className="AuthorizationLogIn">
                    <h3>POMPOM</h3>
                    <img className="cross" src={Cross} />
                    <p>Войти с помощью электронной почты</p>
                    <div className="formButtons">
                        <input type="email" name="email" required placeholder="E-mail" />
                        <input type="password" name="password" required placeholder="Пароль" />
                        <input className="enterButton" type="submit" value="Войти" name="enterButton" />
                    </div>
                    <p className="signUpRef">Зарегистрироваться</p>


                </div>
            </div>
            , document.getElementById("portal"))

    else return null;
}

export default AuthorizationLogIn