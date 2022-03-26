import React from "react";
import pet from "./pet.png";
import "./PetCard.css";


function PetCard(){

    return(
        <div className="petBlock">
            <img className="petPhoto" src={pet}/>
            <div className="petInfo">
                <p className="breed subheading">Самоед щенок</p>
                <p className="age avarage">4 месяца</p>
                <p className="price avarageBig">40 000 ₽</p>
            </div>
            

        </div>
    )
}
export default PetCard;