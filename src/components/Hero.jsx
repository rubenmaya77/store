import React from 'react';

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center text-center vh-100 bg-cover" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800?text=Casa+Limpia+%2B+Mascota)' }}>
      <div className="container text-white">
        <h1 className="display-4 fw-bold">Cuidamos tu hogar y a tu mascota como si fueran nuestros</h1>
        <p className="lead my-4">Servicios profesionales de limpieza y cuidado de mascotas en tu ciudad</p>
        <div className="mt-4">
          <a href="#contact" className="btn btn-primary btn-lg mx-2">Solicitar servicio</a>
          <a href="https://wa.me/TUNUMERODEWHATSAPP" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg mx-2">Contáctanos por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
