import React, { useEffect, useState } from "react";
import PetCard from '../PetCard/PetCard.js';
import "./AnimalsList.css"
import { storage } from "../../storage/PomPomStorage.js";

function AnimalsList(props) {

    return (
        <div className="AnimalsList">
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
        </div>
        //для подгрузки карточек при скроллинге будем вызывать по 1му анималлисту?  
    )
}


export default AnimalsList;
