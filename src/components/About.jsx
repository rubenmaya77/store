import React from 'react';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Sobre Nosotros</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500x300?text=Foto+del+Equipo" alt="Nuestro Equipo" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              Somos un equipo apasionado por el bienestar de tu hogar y tus mascotas. Con años de experiencia en servicios de limpieza y cuidado animal, nos dedicamos a ofrecer soluciones confiables, seguras y responsables.
            </p>
            <p>
              Nuestra misión es: <strong>"Brindar servicios confiables, seguros y responsables para hogares y mascotas."</strong>
            </p>
            <h4 className="mt-4">Nuestros Valores:</h4>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Responsabilidad</li>
              <li><i className="bi bi-heart-fill text-danger me-2"></i>Amor por los animales</li>
              <li><i className="bi bi-clock-fill text-info me-2"></i>Puntualidad</li>
              <li><i className="bi bi-shield-fill-check text-success me-2"></i>Honestidad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
