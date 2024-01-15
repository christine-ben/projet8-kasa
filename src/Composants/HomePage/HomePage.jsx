import React from 'react';
import { useParams } from 'react-router-dom';
import housings from '../../datas/logements.json';
import Collapse from '../layout/Collapse';
import Gallery from '../layout/Gallery';
import GenerateRatingScale from './RatingPage';
import ErrorContent from '../PageErreur/Erreur';

const HousingPage = () => {
  // Récupérer l'ID du paramètre dans l'URL
  const { id } = useParams();

  // Rechercher le logement correspondant à l'ID
  const housing = housings.find(housing => housing.id === id);

  // Si le logement n'est pas trouvé, afficher une page d'erreur
  if (!housing) {
    return (
      <ErrorContent/>
    );
  }

  // Afficher la page du logement
  return (
    <section key={housing.id} className='home_page'>
      {/* Composant Gallery pour afficher les images du logement */}
      <Gallery img={housing.pictures} />

      {/* En-tête de la page avec les informations du logement */}
      <header className='home_page_header'>
        <article className='home_page_infos'>
          <h1 className='home_page_title'>{housing.title}</h1>
          <h2 className='home_page_subtitle'>{housing.location}</h2>
          {/* Afficher les tags du logement */}
          <div className='home_page_tags'>
            {housing.tags.map((tag, i) => (
              <p key={i} className='home_page_tags_tag'>{tag}</p>
            ))}
          </div>
        </article>

        {/* Informations sur l'hôte et l'échelle de notation */}
        <article className='home_page_hoster'>
          <div className='home_page_hoster_infos'>
            <p className='home_page_hoster_name'>{housing.host.name}</p>
            <img src={housing.host.picture} alt='host-cover' className='home_page_hoster_img'/>
          </div>
          <GenerateRatingScale scaleValue={housing.rating} />
        </article>
      </header>

      {/* Sections repliables pour la description et les équipements */}
      <article className='home_page_collapses'>
        <div className='home_page_collapses_content'>
          {/* Composant Collapse pour la description */}
          <Collapse title='Description' content={housing.description} />
        </div>
        <div className='home_page_collapses_content'>
          {/* Composant Collapse pour les équipements */}
          <Collapse
            title='Équipements'
            content={housing.equipments.map((equipment, i) => (
              <ul key={i}>
                <li>{equipment}</li>
              </ul>
            ))}
          />
        </div>
      </article>
    </section>
  );
}

export default HousingPage;
