import { ChangeEvent, FC, Ref, RefObject } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../../actions/charactersActions";
import "./filtros.css";


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Ignacio Aurrecoechea
 *
 * @returns un JSX element
 */

 export interface FiltrosProps {
  clearFiltro: RefObject<HTMLInputElement>;
}

const Filtros: FC<FiltrosProps> = ({clearFiltro}: FiltrosProps) => {
  const dispatch = useDispatch();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.target.value;
    if (currentSearch?.length >= 3) {
      dispatch(
        fetchCharactersThunk(
          `https://rickandmortyapi.com/api/character/?name=${currentSearch}`
        )
      );
    } 
    if (currentSearch?.length === 0) {
      dispatch(
        fetchCharactersThunk(
          "https://rickandmortyapi.com/api/character/"
        )
      );
    }
  };
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        ref = {clearFiltro}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={onChange}
      />
    </div>
  );
};

export default Filtros;
