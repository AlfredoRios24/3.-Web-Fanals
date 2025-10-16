// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';


const Footer: React.FC = () => {
  const { t } = useTranslation();

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div>
        <p>{t('footer.copyright', '© 2025 Web Fanals. Todos los derechos reservados.')}</p>
      </div>
            <button className="scroll-top-btn" onClick={scrollToTop}>
        ↑
      </button>
    </footer>
  );
};

export default Footer;
