import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    { title: "PLANOS Y ORDENANZA", desc: "Dibujo técnico detallado cumpliendo normativas municipales vigentes." },
    { title: "PLANTAS HUMANIZADAS", desc: "Post-producción artística en Photoshop para brochures de venta inmobiliaria." },
    { title: "VISUALIZACIÓN 3D", desc: "Renders de fachadas y exteriores con realismo fotográfico de alto nivel." },
    { title: "RENDERS DE INTERIORES", desc: "Detalle máximo en texturas, iluminación y diseño de ambientes internos." },
    { title: "ANIMACIÓN Y RECORRIDO", desc: "Videos 4K y experiencias inmersivas para preventa de proyectos." },
    { title: "WEB PARA ARQUITECTOS", desc: "Desarrollo de sitios web exclusivos para estudios y constructoras." }
  ];

  return (
    <div className="services-container">
      {/* 1. HERO */}
      <div className="services-hero-bg" style={{ backgroundImage: "url('/Residencia_1.png')" }}>
        <div className="services-overlay">
          <div className="services-intro">
            <h1>NUESTROS SERVICIOS</h1>
            <div className="services-line"></div>
          </div>
        </div>
      </div>

      {/* 2. GRILLA 3x3 (Cajones) */}
      <section className="services-row-section">
        <div className="services-grid-fixed">
          {mainServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA FINAL CENTRADO Y PREMIUM */}
      <section className="services-cta">
        <h2>¿Listo para digitalizar tu proyecto?</h2>
        <p>
          Hablemos sobre cómo nuestras soluciones de Visualización 3D y Desarrollo Web 
          pueden impulsar tus ventas inmobiliarias y llevar tu estudio al siguiente nivel.
        </p>
        <Link to="/contacto" className="btn-primary">
          SOLICITAR COTIZACIÓN
        </Link>
      </section>
    </div>
  );
};

export default Services;