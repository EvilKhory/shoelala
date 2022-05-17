import React from "react";
import { Compteur } from "./Compteur";

const Cards = ({ chaussure }) => {
    return (
        <li className="card">
            <img src={chaussure.image} alt={"aperçu " + chaussure.nom}/>
            <div className="infos">
                <h2>{chaussure.nom}</h2>
                <p>{chaussure.prix + " €"}</p>
            </div>
            <div className="nbProduits" id="nbProduits">
                <Compteur />
            </div>
        </li>
    )
}

export default Cards;