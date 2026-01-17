import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://facebook.com/TUUSUARIODEFACEBOOK" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com/TUUSUARIODEINSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/TUNUMERODEWHATSAPP" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p className="mb-0">© {currentYear} Limpieza & Cuidado de Mascotas – Todos los derechos reservados.</p>
        <p className="mb-0">Diseñado con ❤️ por tu agente de IA.</p>
      </div>
    </footer>
  );
}

export default Footer;
