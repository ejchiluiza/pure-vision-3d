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
            <span className="home-tagline">Estudio de Visualización 3D</span>
            <h1>PURE VISION 3D</h1> {/* Tu nuevo nombre brilla aquí */}
            <div className="home-line"></div>
            <p>
              Elevamos la arquitectura a una experiencia digital. Especialistas en 
              Renders de alta gama, Animaciones HD y Desarrollo Web para el sector inmobiliario.
            </p>
            
            <div className="home-actions">
              <Link to="/servicios" className="btn-primary">
                Ver Portafolio
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;