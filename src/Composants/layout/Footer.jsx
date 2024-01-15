import React from 'react';
import logoFooter from '../../assets/logo-kasa-footer.png';

// Composant pour afficher le pied de page
const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logoFooter} alt='logo-kasa' className='footer_logo' />
      <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
