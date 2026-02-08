import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Función para saber si el link está activo
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="main-header">
      {/* 1. LOGO (IMAGEN) */}
      <Link to="/" className="nav-logo-link" onClick={closeMenu}>
         {/* Asegúrate de que tu archivo se llame 'logo.png' en la carpeta public */}
         <img src="/logo.png" alt="PURE VISION 3D" className="nav-logo" />
      </Link>

      {/* 2. BOTÓN HAMBURGUESA (Móvil) */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isOpen ? <X color="white" size={30} /> : <Menu color="#c5a059" size={30} />}
      </div>

      {/* 3. MENÚ DE NAVEGACIÓN */}
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={closeMenu}>Inicio</Link>
        <Link to="/nosotros" className={isActive('/nosotros')} onClick={closeMenu}>Nosotros</Link>
        <Link to="/servicios" className={isActive('/servicios')} onClick={closeMenu}>Servicios</Link>
        <Link to="/proyectos" className={isActive('/proyectos')} onClick={closeMenu}>Proyectos</Link>
        <Link to="/contacto" className={isActive('/contacto')} onClick={closeMenu}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;