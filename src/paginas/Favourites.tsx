import { FC } from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";
import { cleanFav } from "../actions/favouritesAction";
import CharacterCard from "../componentes/personajes/CharacterCard";
import CharactersGrid from "../componentes/personajes/CharactersGrid";
import { useSelector } from "../store";
import Character from "../types/character.types"
import "../componentes/personajes/grilla-personajes.css";
;

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <Favourites /> ```
 * @author Ignacio Aurrecoechea
 * 
 * @returns la pagina de favoritos
 */

const Favourites: FC = () => {
  const dispatch = useDispatch();
  const { favoritosMapa } = useSelector((state) => state.favourites);
  const limpiarTodo = () => {
    dispatch(cleanFav());
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={limpiarTodo}>
          LIMPIAR FAVORITOS
        </button>
      </div>
      <div className="grilla-personajes">
        {favoritosMapa.map((character: Character) => {
          return (
            <CharacterCard
              key={"character_" + character.id}
              characterData={character}
            />
          );
        })}
        </div>
    </div>
  );
};

export default Favourites;