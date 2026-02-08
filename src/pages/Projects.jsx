import React, { useState } from 'react';

const Projects = () => {
  const [activeImg, setActiveImg] = useState(null);

  // MAGIA: Esto importa TODAS las imágenes de la carpeta automáticamente
  // { eager: true } hace que se carguen al instante.
  const imagesObj = import.meta.glob('../assets/portfolio/*.{png,jpg,jpeg,webp}', { eager: true });
  
  // Convertimos el objeto extraño que devuelve Vite en una lista simple de rutas
  const portfolio = Object.values(imagesObj).map((mod) => mod.default);

  return (
    <div className="projects-container">
      {/* Banner */}
      <div className="projects-hero-section">
        <div className="projects-hero-overlay">
          <span className="home-tagline">Portafolio Premium</span>
          <h1>PURE VISION 3D</h1>
          <div className="projects-hero-line"></div>
        </div>
      </div>

      {/* Galería */}
      <section className="projects-gallery-section">
        <div className="projects-clean-grid">
          {portfolio.map((imgSrc, i) => (
            <div key={i} className="project-image-card" onClick={() => setActiveImg(imgSrc)}>
              <img src={imgSrc} alt={`Proyecto ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImg && (
        <div className="lightbox-overlay" onClick={() => setActiveImg(null)}>
          <span className="close-lightbox">&times;</span>
          <img src={activeImg} className="lightbox-img" alt="Zoom" />
        </div>
      )}
    </div>
  );
};

export default Projects;