// src/pages/Home.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import planols from '../../assets/imagesproyects/Planos.png';
import ProjectCarousel from "../../components/projectCarousel/ProjectCarousel";
import "./Home.css";


const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

    const handleButtonClickContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/contact");
  };

      const handleButtonClickAbout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/about");
  };

        const handleButtonClickProjects = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/service");
  };



  return (
  <div className='mt-36'>
      <h2>{t('home.title', 'Inicio')}</h2>
      <p>{t('home.description', 'Bienvenido a Web Fanals. Esta es la página principal.')}</p>

      {/* Contacto */}
      <section className='container-home-contact'>
        <div className='text-container'>
          <h2>{t('home.home-contact-title')}</h2>
          <p>{t('home.home-contact-description')}</p>
          <img src={planols} alt="Logo Fanals" className="w-[500px] h-[500px] object-cover mx-auto shadow-xl mb-5" />
          <button onClick={handleButtonClickContact}>
            {t('home.home-contact-buton')}
          </button>
        </div>
      </section>

      {/* Nosotros */}
      <section className="container-home-about">
        <div className='text-container'>
          <h2>{t('home.home-about-title')}</h2>
          <p>{t('home.home-about-description')}</p>
          <button onClick={handleButtonClickAbout}>
            {t('home.home-about-buton')}
          </button>
        </div>
      </section>

      {/* Proyectos */}
      <section className="container-home-projects">
        <div className='text-container mb-3'>
          <h2>{t('home.home-projects-title')}</h2>
          <p>{t('home.home-projects-description')}</p>
          <button onClick={handleButtonClickProjects}>
            {t('home.home-projects-buton')}
          </button>
        </div>
        <ProjectCarousel />
      </section>

  </div>
  );
};

export default Home;
