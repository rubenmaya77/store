import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Excelente servicio, dejaron mi casa impecable y cuidaron muy bien a mi perro. ¡Súper recomendados!",
      author: "Ana Pérez",
      city: "Madrid"
    },
    {
      quote: "Mi gato es muy especial y siempre está nervioso con gente nueva, pero con ellos estuvo tranquilo y bien cuidado. La limpieza del hogar también fue perfecta.",
      author: "Carlos Gómez",
      city: "Barcelona"
    },
    {
      quote: "Necesitaba una limpieza profunda urgente y se adaptaron a mis horarios. Profesionales y eficientes. ¡Mi casa brilla!",
      author: "Laura Fernández",
      city: "Valencia"
    },
    {
        quote: "Dejamos a nuestro perrito durante el viaje y nos enviaron fotos diarias. Nos dio mucha tranquilidad. El servicio de limpieza también fue impecable antes de regresar.",
        author: "Marta y Pablo Sánchez",
        city: "Sevilla"
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Testimonios</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm p-3">
                <div className="card-body d-flex flex-column">
                  <p className="card-text flex-grow-1">"{testimonial.quote}"</p>
                  <footer className="blockquote-footer mt-auto">
                    {testimonial.author} en <cite title="Source Title">{testimonial.city}</cite>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
