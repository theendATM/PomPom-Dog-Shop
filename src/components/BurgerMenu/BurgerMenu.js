import { createPortal } from "react-dom"
import "./burgerMenu.css"

export function BurgerMenu(props) {

    const portal=document.getElementById("portal")
    if (!props.visible||portal==null)
        return null;

    return (
        createPortal(

            <div id="shade">

            </div>,

            portal)
    )
}