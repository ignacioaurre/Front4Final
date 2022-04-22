import "./Detalle.css";
import ChapterCard from "../componentes/episodios/ChapterCard";
import FavouriteButton from "../componentes/botones/FavouriteButton";
import { FC } from "react";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PageDetail /> ```
 *
 * @returns la pagina de detalle
 */
const PageDetail: FC = () => {
  return (
    <div className="container">
      <h3>Rick Sanchez</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div className={"detalle-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>
          <FavouriteButton isFavourite={false} onClick={() => {}} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        <ChapterCard />
        <ChapterCard />
        <ChapterCard />
      </div>
    </div>
  );
};

export default PageDetail;
