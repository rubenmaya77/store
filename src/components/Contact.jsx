import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contacto</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Información de Contacto</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><FaPhone className="me-2 text-primary" /> Teléfono: <a href="tel:+34123456789"> +34 123 456 789</a></li>
              <li className="mb-2"><FaWhatsapp className="me-2 text-success" /> WhatsApp: <a href="https://wa.me/TUNUMERODEWHATSAPP" target="_blank" rel="noopener noreferrer">+34 123 456 789</a></li>
              <li className="mb-2"><FaEnvelope className="me-2 text-info" /> Correo: <a href="mailto:info@tudominio.com">info@tudominio.com</a></li>
              <li className="mb-2"><FaMapMarkerAlt className="me-2 text-danger" /> Ciudad o Zona de Cobertura: Tu Ciudad, Tu Región</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h4>Envíanos un Mensaje</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">Servicio Requerido</label>
                <select className="form-select" id="service">
                  <option>Selecciona un servicio</option>
                  <option>Limpieza de casas</option>
                  <option>Limpieza de departamentos</option>
                  <option>Cuidado de mascotas</option>
                  <option>Paseo de perros</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
