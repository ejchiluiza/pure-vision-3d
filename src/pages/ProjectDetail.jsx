import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  // Datos simulados basados en el ID recibido por la URL
  const detalle = {
    titulo: `Expediente Técnico: ${id}`,
    descripcion: "Análisis estructural detallado y propuesta arquitectónica de vanguardia desarrollada por VISTA ARQUITECTURA.",
    metas: ["Eficiencia Energética", "Diseño Sismoresistente", "Materiales Premium"]
  };

  return (
    <div className="project-detail-view">
      <div className="detail-hero-banner">
        <div className="detail-hero-content">
          <h1>{detalle.titulo}</h1>
          <p>ID de Control: {id}</p>
        </div>
      </div>

      <div className="detail-main-info">
        <div className="info-column">
          <h2>Sobre el Proyecto</h2>
          <p>{detalle.descripcion}</p>
        </div>
        <div className="specs-column">
          <h3>Ficha Técnica</h3>
          <ul>
            {detalle.metas.map((meta, index) => (
              <li key={index}>{meta}</li>
            ))}
          </ul>
          <Link to="/proyectos" className="btn-return">Regresar al Portafolio</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;