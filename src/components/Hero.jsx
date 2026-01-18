import React from 'react';
import backgroundImage from '../assets/images/Tarjeta_Male.PNG';

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center text-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '67vh', backgroundSize: 'contain', backgroundColor: '#F9F3E2' }}>
      <div className="container text-white">
        <h1 className="display-4 fw-bold" style={{ color: '#225759' }}>We take care of your home and your pet as if they were our own</h1>
        <p className="lead my-4" style={{ color: '#F68529' }}>Professional cleaning and pet care services in your city</p>
        <div className="mt-4">
          <a href="#contact" className="btn btn-primary btn-lg btn-separation-33">Request service</a>
          <a href="https://wa.me/12392229964?text=Hola%2C%20soy%20Maria%20Elena%20de%20Falconi%20y%20mi%20numero%20es%201%20239%20222%209964." target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Contact us on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
