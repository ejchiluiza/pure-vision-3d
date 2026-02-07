import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-hero-container">
      <div 
        className="home-hero-bg" 
        style={{ backgroundImage: "url('/imagen-central.jpg')" }}
      >
        <div className="home-overlay">
          <div className="home-content-box">
            <span className="home-tagline">Innovación y Precisión</span>
            <h1>CONSTRUIMOS EL FUTURO QUE IMAGINAS</h1>
            <div className="home-line"></div>
            <p>
              En VISTA ARQUITECTURA, convertimos visiones en espacios extraordinarios. 
              Especialistas en diseño arquitectónico moderno y construcción de alta precisión.
            </p>
            
            <div className="home-actions">
              {/* Ajustado: Ahora dirige a la nueva página de PROYECTOS */}
              <Link to="/proyectos" className="btn-primary">
                Nuestros Proyectos
              </Link>
              
              <Link to="/contacto" className="btn-secondary">
                Solicitar Asesoría
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;