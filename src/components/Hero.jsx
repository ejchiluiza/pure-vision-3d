import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección de impacto visual */}
      <section style={{ 
        backgroundColor: '#0d1b2a', 
        color: 'white', 
        textAlign: 'center',
        padding: '120px 10%' 
      }}>
        <h2>VISTA ARQUITECTURA</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.5rem' }}>
          Diseñamos espacios que inspiran, construimos realidades que perduran.
        </p>
      </section>

      {/* Contenido informativo (Jessica) */}
      <section>
        <h3>Nuestra Visión Especializada</h3>
        <p>Expertos en Diseño Arquitectónico, Interiores y Planificación Urbana.</p>
      </section>
    </div>
  );
};

export default Home;