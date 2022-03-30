import "./BurgerMenu.css"
import Cross from "../Authorization/Vector.svg"
import { createPortal } from "react-dom"

export function BurgerMenu(props) {
    return (

        <div id="shade">
            <div id="burger-menu">
                <img id="cross" src={Cross} />
                <div id="buttons-container">
                    <button className="burger-button">Главная</button>
                    <button className="burger-button">Все питомцы</button>
                    <button className="burger-button">О нас</button>
                    <button className="burger-button">Войти или зарегистрироваться</button>
                </div>
            </div>
        </div>)
}