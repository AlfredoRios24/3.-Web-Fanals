// src/pages/About.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '10rem' }}>
      <h2>{t('about.sectionTitle', 'Nosotros')}</h2>
      <p>{t('about.description', 'Somos una empresa dedicada a la cerrajería, ofreciendo servicios de calidad.')}</p>
    </div>
  );
};

export default About;
