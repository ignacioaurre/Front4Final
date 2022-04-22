import { FC, useEffect, useRef, useState } from "react";
import Filtros from "../componentes/personajes/Filters";
import CharactersGrid from "../componentes/personajes/CharactersGrid";
import Pagination from "../componentes/paginacion/Pagination";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../actions/charactersActions";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <Home /> ```
 *
 * @returns la pagina de inicio
 */
const Home: FC = () => {

  const dispatch = useDispatch();

  const clearFiltro = useRef<HTMLInputElement>(null)

  const limpiarFiltro = () => {
    if (clearFiltro.current) {
      clearFiltro.current.value = "";
    }
    dispatch(fetchCharactersThunk(`https://rickandmortyapi.com/api/character`))
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={limpiarFiltro}>Limpiar filtro</button>
      </div>
      <Filtros clearFiltro={clearFiltro} />
      {/* <Pagination /> */}
      <Pagination />
      <CharactersGrid />
    </div>
  );
};

export default Home;
