import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-modern-page">
      <div className="contact-container-split">
        
        {/* Lado Izquierdo */}
        <div className="contact-info-side">
          <span className="contact-label">Contacto Profesional</span>
          <h1>IMPULSA TU PROYECTO</h1>
          <p>
            Materializamos tus ideas con la mayor precisión tecnológica y visual del mercado.
          </p>

          <div className="info-details">
            <div className="detail-item">
              <Phone size={24} color="#c5a059" />
              <div><span>Teléfono</span><p>0999834014</p></div>
            </div>
            <div className="detail-item">
              <Mail size={24} color="#c5a059" />
              <div><span>Email</span><p>vistaarquitecturaec@gmail.com</p></div>
            </div>
            <div className="detail-item">
              <MapPin size={24} color="#c5a059" />
              <div><span>Ubicación</span><p>Valle de los Chillos, Ecuador</p></div>
            </div>
            <div className="detail-item" style={{cursor:'pointer'}} onClick={() => window.open('https://wa.me/593999834014', '_blank')}>
               <MessageCircle size={24} color="#25D366" />
               <div><span>WhatsApp</span><p style={{color:'#25D366'}}>Chatear Ahora</p></div>
            </div>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="contact-form-side">
          <form className="minimalist-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre completo" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="correo@ejemplo.com" />
              </div>
            </div>
            <div className="form-group">
              <label>Servicio de Interés</label>
              <select>
                <option>Render Exterior</option>
                <option>Render Interior</option>
                <option>Recorrido Virtual</option>
                <option>Web para Arquitectos</option>
              </select>
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea rows="4" placeholder="Detalles del proyecto..."></textarea>
            </div>
            <button className="btn-modern-send">Enviar Mensaje <Send size={18}/></button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;