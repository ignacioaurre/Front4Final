import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { matchPath } from "react-router-dom";
import { toggleFav } from "../../actions/favouritesAction";
import { useSelector } from "../../store";
import Character from "../../types/character.types";
import "./boton-favorito.css";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 * @author Ignacio Aurrecoechea
 * @param {Boolean} isFavourite
 * @param {function} onClick
 * @returns un JSX element
 */

const FavouriteButton = ({ character }: any) => {
  const mapa = useSelector((state) => state.favourites.favoritosMapa);
  const found = mapa.find(char => char.id === character.id)
  const [isFav, setIsFav] = useState(false)
  const dispatch = useDispatch();
  const toggleFavorito = () => {
    dispatch(toggleFav(character));
    setIsFav(!isFav)
  };


  return (
    <div className="boton-favorito">
      {found ? (
        <img
          src={"/imagenes/star-filled.png"}
          alt={"favorito"}
          onClick={toggleFavorito}
        />
      ) : (
        <img
          src={"/imagenes/star.png"}
          alt={"favorito"}
          onClick={toggleFavorito}
        />
      )}
    </div>
  );
};

export default FavouriteButton;
