// src/routes/index.tsx
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Layout principal
import AppLayout from '../components/AppLayout';

// Páginas
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Service from '../pages/Service/Service';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout principal con Header y Footer */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />           {/* / */}
          <Route path="about" element={<About />} />   {/* /about */}
          <Route path="contact" element={<Contact />} /> {/* /contact */}
          <Route path="service" element={<Service />} /> {/* /service */}
          <Route path="*" element={<Navigate to="/" />} /> {/* redirección por defecto */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
