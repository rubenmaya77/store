import React from 'react';

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center text-center bg-cover" style={{ minHeight: '67vh', backgroundSize: 'contain', backgroundColor: '#F9F3E2' }}>
      <div className="container text-white">
        <h1 className="display-4 fw-bold" style={{ color: '#225759' }}>We take care of your home and your pet as if they were our own</h1>
        <p className="lead my-4" style={{ color: '#F68529' }}>Professional cleaning and pet care services in your city</p>
        <div className="mt-4">
          <a href="#contact" className="btn btn-primary btn-lg btn-separation-33">Request service</a>
          <a href="https://wa.me/12392229964?text=Hola,%20quiero%20información%20sobre%20sus%20servicios%20de%20limpieza%20y%20cuidado%20de%20mascotas." target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Contact us on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
