// src/pages/Contact.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '10rem' }}>
      <h2>{t('contact.sectionTitle', 'Contacto')}</h2>
      <p>{t('contact.phone', 'Teléfono: +34 123 456 789')}</p>
      <p>{t('contact.email', 'Email: info@webfanals.com')}</p>
      <p>{t('contact.address', 'Dirección: Calle Ejemplo, 123, Ciudad, País')}</p>
    </div>
  );
};

export default Contact;
