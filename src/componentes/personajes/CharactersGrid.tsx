import { FC, useEffect } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import "./grilla-personajes.css";
import CharacterCard from "./CharacterCard";
import { IRootState } from "../../store";
import Character from "../../types/character.types";
import { fetchCharactersThunk } from "../../actions/charactersActions";
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @author Ignacio Aurrecoechea
 *
 * @returns un JSX element
 */

const CharactersGrid: FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);
  const mapa = useSelector((state) => state.favourites.favoritosMapa);
  useEffect(() => {
    dispatch(
      fetchCharactersThunk("https://rickandmortyapi.com/api/character/")
    );
  }, []);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!data || data?.results?.length === 0 || data.error?.length >= 1)
    return <>No hay personajes con ese nombre</>;

  return (
    <div className="grilla-personajes">
      {data?.results?.map((character: Character) => {
        return (
          <CharacterCard
            key={"character_" + character.id}
            characterData={character}
          />
        );
      })}
    </div>
  );
};

export default CharactersGrid;
