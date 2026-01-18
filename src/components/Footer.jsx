import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://www.facebook.com/malenamaya" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/malemaya25/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/12392229964?text=Hola,%20quiero%20información%20sobre%20sus%20servicios%20de%20limpieza%20y%20cuidado%20de%20mascotas." target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p className="mb-0">© {currentYear} Cleaning & Pet Care – All rights reserved.</p>
        <p className="mb-0">Designed with ❤️ by your AI agent.</p>
      </div>
    </footer>
  );
}

export default Footer;
