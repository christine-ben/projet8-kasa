import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  return (
    <li key={id} className='home'>
      <Link to={`/HomePage/${id}`}>
        <figure className='home_figure'>
          <img src={cover} alt={title} className='home_figure_cover' />
          <figcaption className='home_figure_figcaption'>
            <h2 className='home_figure_figcaption_title'>{title}</h2>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
}

export default Card;
