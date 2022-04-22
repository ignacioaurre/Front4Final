import { FC } from "react";
import Character from "../../types/character.types";
import FavouriteButton from "./../botones/FavouriteButton";
import "./tarjeta-personaje.css";

export interface CharacterCardProps {
  characterData: Character;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Ignacio Aurrecoechea
 *
 * @returns un JSX element
 */
const CharacterCard = ({ characterData }: CharacterCardProps) => {
  return (
    <div className="tarjeta-personaje">
      <img src={characterData.image} alt="Rick Sanchez" />
      <div className="tarjeta-personaje-body">
        <span>{characterData.name}</span>
        <FavouriteButton character={characterData} />
      </div>
    </div>
  );
};

export default CharacterCard;
