import React from 'react';

const About = () => {
  return (
    <div className="about-hero-container">
      {/* Mantenemos la imagen about.jpg de fondo */}
      <div 
        className="about-hero-bg" 
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="about-overlay">
          <div className="about-content-box">
            <span className="home-tagline">Nuestra Esencia</span>
            <h1>PURE VISION 3D</h1>
            <div className="about-line"></div>
            <p>
              Somos un estudio de tecnología visual dedicado a cerrar la brecha entre el plano técnico y la realidad emocional. 
              En <strong>PURE VISION 3D</strong>, no solo creamos imágenes; desarrollamos soluciones digitales de alta precisión que permiten a arquitectos, constructoras y clientes finales visualizar el futuro con absoluta claridad.
            </p>
            <div className="about-sub-features">
              <div className="feature-item">
                <strong>Innovación Digital</strong>
                <p>Uso de motores de renderizado de última generación.</p>
              </div>
              <div className="feature-item">
                <strong>ADN Tecnológico</strong>
                <p>Integración de desarrollo web y arquitectura 3D.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;