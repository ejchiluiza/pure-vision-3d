import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

const Footer = () => {
  const iconColor = "#00d4ff"; // Color cian para los iconos
  const iconSize = 20;
  const stroke = 1.2; // Trazo fino para minimalismo

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-item">
          <Phone size={iconSize} strokeWidth={stroke} color={iconColor} />
          <span>023527438</span>
        </div>
        
        <div className="footer-item">
          <MessageSquare size={iconSize} strokeWidth={stroke} color={iconColor} />
          <span>0999834014 / 0988764647</span>
        </div>
        
        <div className="footer-item">
          <MapPin size={iconSize} strokeWidth={stroke} color={iconColor} />
          <span>CALLE QUITUS Y AV. HUANCAVILCA</span>
        </div>
      </div>

      <div className="footer-credits">
        <p>&copy; 2026 VISTA ARQUITECTURA | NRC 29334 - Programación Integrativa</p>
      </div>
    </footer>
  );
};

export default Footer;