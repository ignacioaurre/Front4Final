import "./Detalle.css";
import ChapterCard from "../componentes/episodios/ChapterCard";
import FavouriteButton from "../componentes/botones/FavouriteButton";
import { FC, useEffect, useState } from "react";
import { useSelector } from "../store";
import { useDispatch } from "react-redux";
import { getEpisodesAPI } from "../services/characters.services";
import Episode from "../types/episode.types";

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


  const dispatch = useDispatch();
  const { selectedCharacter } = useSelector((state) => state.selectedCharacter);
  console.log(selectedCharacter)

  const getEpisodes = () => {
    const episodeNumbers = selectedCharacter?.episode.map(e => {
      const corte = e.lastIndexOf("/")
      console.log(e.substring(corte+1))
      return e.substring(corte+1);
    })
    console.log(episodeNumbers?.join(","));
    return episodeNumbers?.join(",")
  }

  const [episodes, setEpisodes] = useState<Episode []>([])

  useEffect(() => {
    const episode = getEpisodes()
    if (episode){
      const result = getEpisodesAPI(episode);
      console.log(result)
    }
  },[])

  

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
          <FavouriteButton character={selectedCharacter} onClick={() => {}} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {episodes.map(e => <ChapterCard />)}
      </div>
    </div>
  );
};

export default PageDetail;
