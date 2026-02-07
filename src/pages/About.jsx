const About = () => {
  return (
    <div className="about-hero-container">
      {/* Usamos el nombre exacto de tu archivo en public: imagen-central.jpg.jpg */}
      <div 
        className="about-hero-bg" 
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="about-overlay">
          <div className="about-content-box">
            <h1>NUESTRA HISTORIA</h1>
            <div className="about-line"></div>
            <p>
              Fundado con la misión de elevar los estándares de diseño arquitectónico 
              en el país, <strong>VISTA ARQUITECTURA</strong> combina la precisión técnica con 
              la creatividad artística.
            </p>
            <div className="about-sub-features">
              <span>Filosofía de Diseño</span>
              <span>Nuestro Equipo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;