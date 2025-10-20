import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import aboutImage from '../../assets/imagesproyects/Hermanos-Herreros.png'; // ← cambia la imagen por la tuya

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      {/* =============================
          SECCIÓN PRINCIPAL: TÍTULO + IMAGEN
      ============================== */}
      <div className="about-header">
        <div className="about-text">
          <h2>{t('about.sectionTitle')}</h2>
          <p>{t('about.description')}</p>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="Nosotros" />
        </div>
      </div>

      {/* =============================
          PREGUNTA PRINCIPAL
      ============================== */}
      <div className="about-question">
        <h3>{t('about.about-question-description')}</h3>
      </div>

      {/* =============================
          TARJETAS DE RESPUESTA
      ============================== */}
      <div className="about-cards">
        <div className="about-card">
          <h4>{t('about.about-first-answer')}</h4>
          <p>{t('about.about-first-answer-description')}</p>
        </div>

        <div className="about-card">
          <h4>{t('about.about-second-answer')}</h4>
          <p>{t('about.about-second-answer-description')}</p>
        </div>

        <div className="about-card">
          <h4>{t('about.about-three-answer')}</h4>
          <p>{t('about.about-three-answer-description')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
