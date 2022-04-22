import { FC, useEffect, useState } from "react";
import Filtros from "../componentes/personajes/Filters";
import CharactersGrid from "../componentes/personajes/CharactersGrid";
import Pagination from "../componentes/paginacion/Pagination";
import { useDispatch, useSelector } from "react-redux";
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
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      {/* <Pagination /> */}
      <Pagination />
      <CharactersGrid />
    </div>
  );
};

export default Home;
