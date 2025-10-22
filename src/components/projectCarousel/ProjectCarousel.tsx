import React, { useState } from "react";
import "./ProjectCarousel.css";
import proyect1 from "../../assets/imagesproyects/piclumen-1743097257090.png";
import proyect2 from "../../assets/imagesproyects/piclumen-1743097264010.png";
import proyect3 from "../../assets/imagesproyects/piclumen-1743098272395.png";
import { useTranslation } from 'react-i18next';

interface ProjectItem {
  image: string;
  title: string;
  description: string;
}

const LeftActiveCarouselHorizontal: React.FC = () => {
  const { t } = useTranslation(); // ✅ dentro del componente

  const projects: ProjectItem[] = [
    {
      image: proyect1,
      title: t('home.home-projects-card1-title'),
      description: t('home.home-projects-card1-description')
    },
    {
      image: proyect2,
      title: t('home.home-projects-card2-title'),
      description: t('home.home-projects-card2-description')
    },
    {
      image: proyect3,
      title: t('home.home-projects-card3-title'),
      description: t('home.home-projects-card3-description')
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const inactiveImages = projects.filter((_, i) => i !== activeIndex);

  return (
    <div className="left-carousel-horizontal-container">
      {/* Imagen activa con fade */}
      <div
        key={activeIndex} // key fuerza re-render y activa la transición
        className="active-image fade"
        style={{ backgroundImage: `url(${projects[activeIndex].image})` }}
      >
        <div className="content">
          <h2>{projects[activeIndex].title}</h2>
          <p>{projects[activeIndex].description}</p>
        </div>
      </div>

      {/* Miniaturas sin scroll */}
      <div className="inactive-images">
        {inactiveImages.map((project, idx) => (
          <img
            key={idx}
            src={project.image}
            alt={project.title}
            className="thumbnail"
            onClick={() => setActiveIndex(projects.indexOf(project))}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftActiveCarouselHorizontal;
