import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // <--- IMPORTANTE
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root-container">
        
        {/* Aquí va el nuevo Navbar inteligente */}
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        <footer className="main-footer">
           {/* ... tu footer existente ... */}
           <div className="footer-credits"><p>© 2024 PURE VISION 3D. Todos los derechos reservados.</p></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;