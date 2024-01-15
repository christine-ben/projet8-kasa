import React from 'react';

// Composant pour afficher une carte de logement
const Card = ({ id, title, cover }) => {
  return (
   
  <li key={id} className='home'>
      
      <a href={'/HomePage/' + id}>
        
        <figure className='home_figure'>
          
          <img src={cover} alt={title} className='home_figure_cover' />
          
          <figcaption className='home_figure_figcaption'>
            <h2 className='home_figure_figcaption_title'>{title}</h2>
          </figcaption>
        
        </figure>
      
      </a>
  
  </li>
  );
}

export default Card;
