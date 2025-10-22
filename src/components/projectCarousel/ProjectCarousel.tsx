import React, { useState, useEffect } from 'react';
import './ProjectCarousel.css';

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [verticalView, setVerticalView] = useState(true); // vista vertical por defecto en móvil

  // Detecta tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className={`project-carousel ${verticalView ? 'vertical' : 'horizontal'}`}>
      
      {isMobileView && (
        <button 
          className="toggle-view-btn" 
          onClick={() => setVerticalView(!verticalView)}
        >
          {verticalView ? 'Horizontal' : 'Vertical'}
        </button>
      )}

      <div className="main-image">
        <img src={images[currentIndex]} alt={`Project ${currentIndex}`} />
      </div>

      <div className={`thumbnails ${verticalView ? 'vertical-thumbs' : 'horizontal-thumbs'}`}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {!verticalView && !isMobileView && (
        <div className="nav-buttons">
          <button onClick={prevImage}>{'<'}</button>
          <button onClick={nextImage}>{'>'}</button>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
