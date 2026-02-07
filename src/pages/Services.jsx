import React from 'react';

const Services = () => {
  // Datos para la cuadrícula superior de servicios principales
  const mainServices = [
    { title: "PLANIFICACIÓN", desc: "Gestión estratégica y técnica para asegurar la viabilidad económica y normativa de cada obra." },
    { title: "DISEÑO", desc: "Creatividad arquitectónica enfocada en fusionar la funcionalidad con una estética moderna e impactante." },
    { title: "CONSTRUCCIÓN", desc: "Ejecución de obra de alta precisión, cumpliendo con los más exigentes estándares de calidad y seguridad." }
  ];

  // Datos actualizados con imágenes para la sección de especialidades
  const specialties = [
    { 
      title: "Proyectos Residenciales", 
      image: "/residencial.jpg",
      desc: "Diseño y construcción de hogares unifamiliares personalizados."
    },
    { 
      title: "Conjuntos Habitacionales", 
      image: "/conjuntos.jpeg",
      desc: "Desarrollo de complejos urbanísticos modernos y funcionales."
    },
    { 
      title: "Centros Comerciales", 
      image: "/comercial.png",
      desc: "Espacios comerciales diseñados para maximizar la experiencia del usuario."
    },
    { 
      title: "Diseño de Interiores", 
      image: "/interiores.jpg",
      desc: "Transformación de espacios internos con elegancia y confort."
    }
  ];

  return (
    <div className="services-container">
      {/* 1. Hero de Servicios (Mantenemos tu imagen central de fondo) */}
      <div 
        className="services-hero-bg" 
        style={{ backgroundImage: "url('/Residencia_1.png')" }}
      >
        <div className="services-overlay">
          <div className="services-intro">
            <h1>NUESTROS SERVICIOS</h1>
            <div className="services-line"></div>
            <p>Soluciones integrales en arquitectura e ingeniería para proyectos que marcan la diferencia.</p>
          </div>
        </div>
      </div>

      {/* 2. Rejilla de Servicios Principales (Planificación, Diseño, Construcción) */}
      <section className="services-grid-section">
        <div className="services-grid">
          {mainServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Nueva Sección de Especialidades con Imágenes */}
      <section className="specialties-section">
        <h2>NUESTRAS ÁREAS DE ESPECIALIZACIÓN</h2>
        <div className="specialties-grid">
          {specialties.map((item, index) => (
            <div key={index} className="specialty-card">
              <div className="specialty-image-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="specialty-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;