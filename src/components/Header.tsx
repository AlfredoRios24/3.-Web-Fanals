import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logoFanals from '../assets/iconFanals.png';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navheader">
      {/* Logo + título */}
      <div className="header-title">
        <img src={logoFanals} alt="Logo Fanals" className="header-logo" />
        <span>{t('header.title')}</span>

        {/* Botón hamburguesa para móvil */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Links de navegación y botones de idioma */}
      <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={scrollToTop}>{t('nav.home')}</Link>
        <Link to="/about" onClick={scrollToTop}>{t('nav.about')}</Link>
        <Link to="/service" onClick={scrollToTop}>{t('nav.service')}</Link>
        <Link to="/contact" onClick={scrollToTop}>{t('nav.contact')}</Link>

        <div className="lang-buttons">
          <button
            className={`flag-es ${i18n.language === 'es' ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage('es')}
          >
            ES
          </button>
          <button
            className={`flag-ca ${i18n.language === 'ca' ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage('ca')}
          >
            CA
          </button>
          <button
            className={`flag-en ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
