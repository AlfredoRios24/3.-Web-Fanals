import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Service.css';

// Imágenes locales de ejemplo
import img1 from '../../assets/imagesproyects/BarandaInox.png';
import img2 from '../../assets/imagesproyects/BarandaInox2.png';
import img3 from '../../assets/imagesproyects/BarandaHierro.png';
import img4 from '../../assets/imagesproyects/Pergola.png';
import img5 from '../../assets/imagesproyects/PortonHierro.png';
import img6 from '../../assets/imagesproyects/Motor.png';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Service: React.FC = () => {
  const { t } = useTranslation();

  const images = [img1, img2, img3, img4, img5, img6 ];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="services mb-10">
      {/* Título y descripción */}
      <div className="services-header">
        <h2>{t('services.sectionTitle')}</h2>
        <p>{t('services.description')}</p>
      </div>

      {/* Bloques de servicios 2x2 */}
      <div className="services-list">
        <div className="service-item">
          <h3>{t('services.service1')}</h3>
          <p>{t('services.service1-description')}</p>
        </div>
        <div className="service-item">
          <h3>{t('services.service2')}</h3>
          <p>{t('services.service2-description')}</p>
        </div>
        <div className="service-item">
          <h3>{t('services.service3')}</h3>
          <p>{t('services.service3-description')}</p>
        </div>
        <div className="service-item">
          <h3>{t('services.service4')}</h3>
          <p>{t('services.service4-description')}</p>
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div className="services-carousel">
        {/* Flecha izquierda */}
        <button className="carousel-btn prev" onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Imágenes */}
        <div className="carousel-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Servicio ${index + 1}`}
              className={index === activeIndex ? 'active' : ''}
            />
          ))}

          {/* Indicadores */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        <button className="carousel-btn next" onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default Service;
