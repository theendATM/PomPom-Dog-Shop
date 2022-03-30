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
import broken from "./broken.png"
import { getRandomDog } from "../../API/dogapi";
import { breedData } from "../../API/dogapi";

function PetCard(props) {
    const [address, setAddress] = useState(broken)

    const [breed, setBreed] = useState("shiba")

    const currentBreedFilter = useSelector(filterState => filterState.query)

   //console.log()

    useEffect(() => {
        getRandomDog(currentBreedFilter).then(data => {
            setBreed(data.breed)
            setAddress(data.url)
        })


    }, [useSelector(filterState => filterState.query)])

    return (
        <div className="petBlock">
            <img className="petPhoto" src={address} alt="пёсель" />
            <div className="petInfo">
                <p className="breed subheading">{breedData[breed].name}</p>
                <p className="age avarage">4 месяца</p>
                <p className="price avarageBig">{breedData[breed].cost}</p>
            </div>


        </div>
    )
}
export default PetCard;