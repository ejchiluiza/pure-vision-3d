import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Configuración de proyectos con IDs únicos para la ruta dinámica
  const proyectosData = [
    { id: "RES-01", imagen: "proyectos1.jpg", titulo: "Residencia Moderna" },
    { id: "COM-02", imagen: "proyectos2.jpg", titulo: "Centro Comercial" },
    { id: "HAB-03", imagen: "proyectos3.jpg", titulo: "Conjunto Habitacional" },
    { id: "INT-04", imagen: "proyectos4.jpg", titulo: "Remodelación Interiores" },
    { id: "COR-05", imagen: "proyectos5.jpg", titulo: "Edificio Corporativo" },
    { id: "URB-06", imagen: "proyectos6.jpg", titulo: "Urbanización Privada" }
  ];

  return (
    <div className="projects-container">
      <div className="projects-hero-section">
        <div className="projects-hero-overlay">
          <h1>NUESTROS PROYECTOS</h1>
          <div className="projects-hero-line"></div>
          <p>Transformamos visiones arquitectónicas en realidades tangibles y duraderas.</p>
        </div>
      </div>

      <section className="projects-gallery-section">
        <div className="projects-masonry-grid">
          {proyectosData.map((proy) => (
            <div key={proy.id} className="project-card-item">
              <div className="project-card-img-wrapper">
                <img src={`/${proy.imagen}`} alt={proy.titulo} />
                <div className="project-card-hover-info">
                  <h3>{proy.titulo}</h3>
                  {/* Link dinámico que envía el ID a la URL */}
                  <Link to={`/proyectos/${proy.id}`} className="view-detail-btn">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;