import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import logoFanals from '../assets/logos-corporativos/logo.jpg';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  // Detecta si el usuario ha hecho scroll hacia el final de la página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setVisible(scrollPosition >= pageHeight - 100); // muestra el footer al llegar al final
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`footer ${visible ? 'visible' : ''}`}>
      <div className="footer-content">
        <img src={logoFanals} alt="Logo Fanals" className="footer-logo" />
        <p className="footer-text">
          {t('footer.copyright', '© 2025 Web Fanals. Todos los derechos reservados.')}
        </p>
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
