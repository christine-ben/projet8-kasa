import React from 'react';


// Composant pour afficher une bannière avec titre et image
const Banner = ({ title, src }) => {
  return (
    <div className="banner">
      <h1 className="banner_title">{title}</h1>
      <img src={src} alt='banniere-kasa' className='banner_img' />
    </div>
  );
}

export default Banner;
