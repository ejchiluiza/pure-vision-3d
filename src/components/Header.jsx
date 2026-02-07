import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="VISTA ARQUITECTURA" className="nav-logo" />
        </Link>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink> 
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink> {/* Nuevo Link */}
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;