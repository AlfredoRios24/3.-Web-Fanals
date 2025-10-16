// src/pages/Home.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '6rem' }}>
      <h2>{t('home.title', 'Inicio')}</h2>
      <p>{t('home.description', 'Bienvenido a Web Fanals. Esta es la página principal.')}</p>
    </div>
  );
};

export default Home;
