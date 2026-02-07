import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-modern-page">
      <div className="contact-container-split">
        
        {/* Lado Izquierdo: Información Técnica */}
        <div className="contact-info-side">
          <span className="contact-label">Contacto Directo</span>
          <h1>HABLEMOS DE TU PRÓXIMO PROYECTO</h1>
          <p>
            Estamos listos para transformar tus ideas en estructuras sólidas y funcionales.
          </p>

          <div className="info-details">
            <div className="detail-item">
              <Phone size={20} color="#00d4ff" />
              <div>
                <span>Teléfonos</span>
                <p>023527438 / 0999834014</p>
              </div>
            </div>
            <div className="detail-item">
              <Mail size={20} color="#00d4ff" />
              <div>
                <span>Correo Electrónico</span>
                <p>vistaarquitecturaec@gmail.com</p>
              </div>
            </div>
            <div className="detail-item">
              <MapPin size={20} color="#00d4ff" />
              <div>
                <span>Ubicación</span>
                <p>Valle de los Chillos, Ecuador</p>
                <p className="sub-addr">Calle Quitus y Av. Huancavilca</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario Moderno */}
        <div className="contact-form-side">
          <form className="minimalist-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" placeholder="Ej: Edison Chiluiza" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="ejemplo@correo.com" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Tipo de Proyecto</label>
              <select>
                <option>Residencial</option>
                <option>Comercial</option>
                <option>Diseño de Interiores</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="Cuéntanos los detalles de tu obra..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-modern-send">
              Enviar Solicitud <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;