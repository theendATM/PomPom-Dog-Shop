import React from "react";
import "./AuthorizationLogIn.css"
import AuthorizationSignUp from "./AuthorizationSignUp.js"
import Cross from "./Vector.svg"


function AuthorizationLogIn() {
    //return null;
    
    return (
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
    )
}

export default AuthorizationLogIn