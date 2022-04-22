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
 * @author Ignacio Aurrecoechea
 * @returns la pagina de detalle
 */
const PageDetail: FC = () => {


  const dispatch = useDispatch();
  const { selectedCharacter } = useSelector((state) => state.selectedCharacter);
  console.log(selectedCharacter);
  

  const getEpisodes = () => {
    const episodeNumbers = selectedCharacter?.episode.map(e => {
      const corte = e.lastIndexOf("/")
      return e.substring(corte+1);
    })
    return episodeNumbers?.join(",")
  }

  const [episodes, setEpisodes] = useState<Episode []>([])

  useEffect(() => {
    const episode = getEpisodes()
    if (episode){
      getEpisodesAPI(episode).then(episodios => setEpisodes(episodios))
    }
  },[])

  

  return (
    <div className="container">
      <h3>{selectedCharacter?.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img
            src={selectedCharacter?.image}
            alt="Rick Sanchez"
          />
          <div className={"detalle-header-texto"}>
            <p>{selectedCharacter?.name}</p>
            <p>Planeta: {selectedCharacter?.origin?.name}</p>
            <p>Genero: {selectedCharacter?.gender}</p>
          </div>
          <FavouriteButton character={selectedCharacter} onClick={() => {}} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {episodes.map(e => <ChapterCard key={e.id} episodio={e.episode} airDate={e.air_date} name={e.name}  />)}
      </div>
    </div>
  );
};

export default PageDetail;
