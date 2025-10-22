import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact mb-10">
      <h2 className="contact-title">{t('contact.sectionTitle', 'Contáctanos')}</h2>

      <div className="contact-container">
        {/* Lado izquierdo: información */}
        <div className="contact-info">
          <div className="info-item">
            <span className="label">{t('contact.label-phone')}</span>
            <span className="value">{t('contact.phone')}</span>
          </div>
          <div className="info-item">
            <span className="label">{t('contact.label-email')}</span>
            <span className="value">{t('contact.email')}</span>
          </div>
          <div className="info-item">
            <span className="label">{t('contact.label-address')}</span>
            <span className="value">{t('contact.address')}</span>
          </div>
          <div className="info-item">
            <span className="label">{t('contact.label-time')}</span>
            <span className="value">
              {t('contact.timetable')} - {t('contact.time')}
            </span>
          </div>
        </div>

        {/* Lado derecho: mapa */}
        <div className="contact-map">
          <iframe
            title="Mapa de Google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.309227566514!2d3.1540918!3d41.9361151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba543f8b41557b%3A0x687ed3c8879cce37!2sSERRALLERIA%20FANALS%20S.L.!5e0!3m2!1ses!2ses!4v1697555221245!5m2!1ses!2ses"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
