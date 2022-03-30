import React from "react";
import pet from "./pet.png";
import "./PetCard.css";
import { storage } from "../../storage/PomPomStorage";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getBreed } from "../../API/dogapi";
import { getImage } from "../../API/dogapi";


function PetCard(props) {
    const [address, setAddress] = useState("")

    const currentBreedFilter = useSelector(filterState => filterState.query)

    useEffect(() => getImage(currentBreedFilter).then(data => setAddress(data.message), data => setAddress("")), [useSelector(filterState => filterState.query)])

    return (
        <div className="petBlock">
            <img className="petPhoto" src={address} alt="пёсель" />
            <div className="petInfo">
                <p className="breed subheading">Самоед щенок</p>
                <p className="age avarage">4 месяца</p>
                <p className="price avarageBig">40 000 ₽</p>
            </div>


        </div>
    )
}
export default PetCard;