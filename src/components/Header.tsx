import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logoFanals from '../assets/iconFanals.png';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Función para hacer scroll arriba al clicar un link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navheader">
      {/* Título + Logo */}
      <div className="header-title">
        <img src={logoFanals} alt="Logo Fanals" className="header-logo" />
        <span>{t('header.title')}</span>
        <h3>{t('header.subtitle')}</h3>
      </div>

      {/* Links de navegación */}
      <div className="nav-container">
        <Link to="/" onClick={scrollToTop}>{t('nav.home', 'Inicio')}</Link>
        <Link to="/about" onClick={scrollToTop}>{t('nav.about', 'Nosotros')}</Link>
        <Link to="/service" onClick={scrollToTop}>{t('nav.service', 'Service')}</Link>
        <Link to="/contact" onClick={scrollToTop}>{t('nav.contact', 'Contacto')}</Link>
        
        
      {/* Botones de idioma */}
      <div className="lang-buttons">
        <button onClick={() => i18n.changeLanguage('es')}>ES</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('ca')}>CA</button>
      </div>

      </div>

    </nav>
  );
};

export default Header;
